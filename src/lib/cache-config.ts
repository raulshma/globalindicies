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
