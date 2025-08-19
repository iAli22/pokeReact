/**
 * App-wide configuration settings
 */

export const APP_CONFIG = {
  // App info
  name: 'Pokémon Explorer',
  version: '1.0.0',
  
  // Feature flags
  features: {
    darkMode: true,
    notifications: true,
    offlineSupport: false,
  },
  
  // Default pagination settings
  pagination: {
    defaultLimit: 20,
    maxLimit: 100,
  },
  
  // Cache settings
  cache: {
    ttl: 60 * 60 * 1000, // 1 hour in milliseconds
    maxSize: 100, // Maximum number of items to cache
  },
};
