const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://pokeapi.co/api/v2';

export const API_ENDPOINTS = {
  POKEMON: {
    LIST: `${API_BASE_URL}/pokemon`,
    DETAIL: (name: string) => `${API_BASE_URL}/pokemon/${name}`,
  }
};

export default API_ENDPOINTS;
