// Mock modules first, before any imports
jest.mock('../../../config/api', () => ({
  getBaseApiUrl: () => 'https://pokeapi.co/api/v2'
}));

// Create mock function for RTK Query hook
const mockUseGetPokemonByIdQuery = jest.fn();

// Mock the RTK Query hook
jest.mock('../../../features/pokemon/api/pokemonApi', () => ({
  useGetPokemonByIdQuery: mockUseGetPokemonByIdQuery
}));

// Mock redux-related modules
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => ({ selectedPokemon: null })),
  Provider: ({ children }: { children: React.ReactNode }) => <>{children}</>
}));

// Mock React Router hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ name: 'pikachu' }),
  MemoryRouter: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Routes: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Route: ({ element }: { element: React.ReactNode }) => <>{element}</>
}));

import { render, screen } from '@testing-library/react';
import PokemonDetail from '../../../features/pokemon/components/PokemonDetail';

describe('PokemonDetail Component', () => {
  // Reset mocks before each test
  beforeEach(() => {
    mockUseGetPokemonByIdQuery.mockReset();
  });

  it('renders loading state', () => {
    mockUseGetPokemonByIdQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
    });

    render(<PokemonDetail />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseGetPokemonByIdQuery.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: { message: 'Failed to fetch Pokemon details' },
    });

    render(<PokemonDetail />);

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('renders pokemon details when data is available', () => {
    const mockData = {
      name: 'pikachu',
      id: 25,
      height: 4,
      weight: 60,
      sprites: {
        front_default: 'https://example.com/pikachu.png',
        other: {
          'official-artwork': {
            front_default: 'https://example.com/pikachu-official.png'
          }
        }
      },
      types: [
        { type: { name: 'electric' } },
      ],
      stats: [
        { base_stat: 35, stat: { name: 'hp' } },
        { base_stat: 55, stat: { name: 'attack' } },
      ],
    };

    mockUseGetPokemonByIdQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
      error: null,
    });

    render(<PokemonDetail />);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
  });
});
