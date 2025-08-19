import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonDetail, PokemonListResponse } from '../../../types/pokemon';
import { getBaseApiUrl } from '../../../config/api';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: getBaseApiUrl() }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, void>({
      query: () => '/pokemon?limit=20',
    }),
    getPokemonById: builder.query<PokemonDetail, string>({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
