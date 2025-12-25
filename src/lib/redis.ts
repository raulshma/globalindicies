/**
 * Redis client configuration for caching
 * Uses ioredis for Redis Cloud connection
 */

import Redis from 'ioredis'

// Singleton Redis client
// In Vite dev/HMR, modules can be re-evaluated without restarting the Node process.
// Stash the client on globalThis to avoid creating multiple connections.
type GlobalWithRedis = typeof globalThis & {
  __indiaranksRedisClient?: Redis
}

const globalForRedis = globalThis as GlobalWithRedis

let redisClient: Redis | null = globalForRedis.__indiaranksRedisClient ?? null

/**
 * Get or create Redis client instance
 * Returns null if REDIS_URL is not configured
 */
export function getRedisClient(): Redis | null {
  if (redisClient) {
    // If the connection was ended, recreate it
    if (redisClient.status !== 'end') return redisClient
    redisClient = null
    globalForRedis.__indiaranksRedisClient = undefined
  }

  const redisUrl = process.env.REDIS_URL

  if (!redisUrl) {
    console.warn('[Redis] REDIS_URL not configured, caching disabled')
    return null
  }

  try {
    redisClient = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      // Connect immediately in the background so `status` becomes `ready` quickly.
      // We'll still guard cache calls to only execute when ready.
      lazyConnect: false,
      // Don't block the app if Redis is unavailable
      enableOfflineQueue: false,
    })

    globalForRedis.__indiaranksRedisClient = redisClient

    redisClient.on('connect', () => {
      console.log('[Redis] Connected successfully')
    })

    redisClient.on('ready', () => {
      console.log('[Redis] Ready to accept commands')
    })

    redisClient.on('error', (err) => {
      console.error('[Redis] Connection error:', err.message)
    })

    redisClient.on('close', () => {
      console.log('[Redis] Connection closed')
    })

    return redisClient
  } catch (error) {
    console.error('[Redis] Failed to create client:', error)
    return null
  }
}

/**
 * Gracefully disconnect Redis client
 */
export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit()
    redisClient = null
    globalForRedis.__indiaranksRedisClient = undefined
  }
}
