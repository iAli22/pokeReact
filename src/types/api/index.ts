import { PokemonListResponse, PokemonDetail } from '../pokemon';

export interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export interface PaginationParams {
  limit?: number;
  offset?: number;
}

export type PokemonListApiResponse = ApiResponse<PokemonListResponse>;
export type PokemonDetailApiResponse = ApiResponse<PokemonDetail>;
