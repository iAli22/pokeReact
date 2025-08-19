import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonType } from '../../../types/pokemon';
import { pokemonApi } from '../api/pokemonApi';

interface PokemonState {
  pokemonList: PokemonType[];
  selectedPokemon: string | null;
}

const initialState: PokemonState = {
  pokemonList: [],
  selectedPokemon: null,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedPokemon: (state, action: PayloadAction<string>) => {
      state.selectedPokemon = action.payload;
    },
    clearSelectedPokemon: (state) => {
      state.selectedPokemon = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      pokemonApi.endpoints.getPokemonList.matchFulfilled,
      (state, action) => {
        state.pokemonList = action.payload.results;
      }
    );
  },
});

export const { setSelectedPokemon, clearSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
