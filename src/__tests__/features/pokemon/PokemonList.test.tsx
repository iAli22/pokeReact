// Mock modules first, before any imports
jest.mock('../../../config/api', () => ({
  getBaseApiUrl: () => 'https://pokeapi.co/api/v2'
}));

// Create mock function for RTK Query hook
const mockUseGetPokemonListQuery = jest.fn();

// Mock the RTK Query hook
jest.mock('../../../features/pokemon/api/pokemonApi', () => ({
  useGetPokemonListQuery: mockUseGetPokemonListQuery
}));

// Mock react-router-dom
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

// Mock redux-related modules
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => ({ pokemonList: [] })),
  Provider: ({ children }: { children: React.ReactNode }) => <>{children}</>
}));

// Now import all modules after mocking
import { render, screen } from '@testing-library/react';
import PokemonList from '../../../features/pokemon/components/PokemonList';

describe('PokemonList Component', () => {
  // Reset mocks before each test
  beforeEach(() => {
    mockUseGetPokemonListQuery.mockReset();
  });

  it('renders loading state', () => {
    mockUseGetPokemonListQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
    });

    render(<PokemonList />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseGetPokemonListQuery.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: { message: 'Failed to fetch Pokemon' },
    });

    render(<PokemonList />);

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('renders pokemon list when data is available', () => {
    const mockData = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      ],
    };

    mockUseGetPokemonListQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
      error: null,
    });

    render(<PokemonList />);

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
  });
});
