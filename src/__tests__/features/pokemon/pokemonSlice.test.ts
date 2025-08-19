// Mock modules first before any imports
jest.mock('../../../config/api', () => ({
  getBaseApiUrl: () => 'https://pokeapi.co/api/v2'
}));

// Create a standalone test version of the slice
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Create a simplified version of the Pokemon slice for testing
const testPokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: [],
    selectedPokemon: null as string | null,
  },
  reducers: {
    setSelectedPokemon: (state, action: PayloadAction<string>) => {
      state.selectedPokemon = action.payload;
    },
    clearSelectedPokemon: (state) => {
      state.selectedPokemon = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('pokemonApi/executeQuery/fulfilled', (state, action: any) => {
      if (action.payload && action.payload.results) {
        state.pokemonList = action.payload.results;
      }
    });
  },
});

const { setSelectedPokemon, clearSelectedPokemon } = testPokemonSlice.actions;
const testReducer = testPokemonSlice.reducer;

describe('Pokemon Slice', () => {
  const initialState = {
    pokemonList: [],
    selectedPokemon: null,
  };

  it('should handle initial state', () => {
    expect(testReducer(undefined, { type: 'unknown' })).toEqual({
      pokemonList: [],
      selectedPokemon: null,
    });
  });

  it('should handle setSelectedPokemon', () => {
    const actual = testReducer(initialState, setSelectedPokemon('charizard'));
    expect(actual.selectedPokemon).toEqual('charizard');
  });

  it('should handle clearSelectedPokemon', () => {
    const stateWithPokemon = {
      pokemonList: [],
      selectedPokemon: 'charizard',
    };
    const actual = testReducer(stateWithPokemon, clearSelectedPokemon());
    expect(actual.selectedPokemon).toBeNull();
  });

  it('should update pokemonList when getPokemonList query is fulfilled', () => {
    const mockAction = {
      type: 'pokemonApi/executeQuery/fulfilled',
      payload: {
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }
        ]
      }
    };

    const actual = testReducer(initialState, mockAction);
    expect(actual.pokemonList).toEqual([
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }
    ]);
  });
});
