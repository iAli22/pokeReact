// Mock for Vite's import.meta.env
export const mockEnv = {
  VITE_API_BASE_URL: 'https://pokeapi.co/api/v2',
};

// Mock base API URL function for testing
export const getBaseApiUrlMock = () => 'https://pokeapi.co/api/v2';

// Helper to create a mock for pokemonApi endpoints
export const createPokemonApiMock = () => ({
  endpoints: {
    getPokemonList: {
      matchFulfilled: { type: 'pokemonApi/executeQuery/fulfilled' }
    },
    getPokemonDetail: {
      matchFulfilled: { type: 'pokemonApi/executeQuery/fulfilled' }
    }
  },
  reducerPath: 'pokemonApi',
  reducer: () => ({}),
  middleware: () => (next: any) => (action: any) => next(action),
  util: { resetApiState: () => ({ type: 'pokemonApi/reset' }) }
});
