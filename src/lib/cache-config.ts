// Cache configuration constants (in milliseconds)
export const CACHE_CONFIG = {
  // Stable data that rarely changes (domains, indices metadata)
  STABLE: {
    staleTime: 1000 * 60 * 60, // 1 hour - data considered fresh
    gcTime: 1000 * 60 * 60 * 24, // 24 hours - keep in cache
  },
  // Semi-stable data (rankings, comparisons)
  SEMI_STABLE: {
    staleTime: 1000 * 60 * 5, // 5 minutes - data considered fresh
    gcTime: 1000 * 60 * 30, // 30 minutes - keep in cache
  },
  // Dynamic data (dashboard, trends with user selections)
  DYNAMIC: {
    staleTime: 1000 * 60 * 2, // 2 minutes - data considered fresh
    gcTime: 1000 * 60 * 10, // 10 minutes - keep in cache
  },
} as const

// Server-side CDN cache headers (for Vercel Edge)
// These headers instruct Vercel's CDN to cache responses at the edge
export const CDN_CACHE = {
  // Static data: countries, peer groups (1 hour CDN cache, 1 day stale-while-revalidate)
  STATIC: 's-maxage=3600, stale-while-revalidate=86400',
  // Reference data: domains, indices metadata (30 min CDN cache, 1 hour stale)
  REFERENCE: 's-maxage=1800, stale-while-revalidate=3600',
  // Dynamic data: rankings with country filter (5 min CDN cache, 30 min stale)
  DYNAMIC: 's-maxage=300, stale-while-revalidate=1800',
  // No caching for user-specific data
  NONE: 'no-store, no-cache, must-revalidate',
} as const

// Helper to set cache headers on server function responses
export function setCacheHeaders(
  headers: Headers,
  cacheType: keyof typeof CDN_CACHE
): void {
  headers.set('Cache-Control', CDN_CACHE[cacheType])
}
