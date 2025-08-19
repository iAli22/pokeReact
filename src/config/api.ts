// Environment variable or default API URL
export const getBaseApiUrl = (): string => {
  return import.meta.env.VITE_API_BASE_URL || 'https://pokeapi.co/api/v2';
};
