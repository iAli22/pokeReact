import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPokemonListQuery } from '../api/pokemonApi';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import styles from '../../../styles/components/PokemonList.module.scss';
import { useNotification } from '../../../contexts/NotificationContext';

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  useEffect(() => {
    if (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load Pokémon list';
      addNotification(errorMessage, 'error', 7000);
    }
  }, [error, addNotification]);

  const handlePokemonClick = (name: string) => {
    navigate(`/pokemon/${name}`);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div style={{ color: '#ef4444' }}>Error loading Pokémon</div>;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data?.results.map((pokemon) => (
          <li key={pokemon.name}

          >
            <button 
              className={styles.listItem}
              onClick={() => handlePokemonClick(pokemon.name)}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split('/').filter(Boolean).pop()
                }.png`}
                alt={`${pokemon.name} sprite`}
                style={{ width: '3rem', height: '3rem', marginRight: '1rem' }}
              />
              <span className={styles.pokemonName}>{pokemon.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
