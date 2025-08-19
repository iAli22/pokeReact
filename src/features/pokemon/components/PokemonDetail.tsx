import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByIdQuery } from '../api/pokemonApi';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import styles from '../../../styles/components/PokemonDetail.module.scss';
import { useNotification } from '../../../contexts/NotificationContext';

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, error, isLoading } = useGetPokemonByIdQuery(name || '', {
    skip: !name,
  });
  const { addNotification } = useNotification();

  useEffect(() => {
    if (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : `Failed to load details for ${name}. Please try again later.`;
      addNotification(errorMessage, 'error', 7000);
    }
  }, [error, addNotification, name]);

  if (!name) {
    return (
      <div className={styles.notFound} role="alert">
        <p>Pokémon not found</p>
      </div>
    );
  }

  if (isLoading) return <LoadingSpinner aria-label={`Loading details for ${name}`} />;
  if (error) return <div className={styles.errorMessage} role="alert">Error loading Pokémon details</div>;

  if (!data) return null;

  // Capitalize first letter of Pokémon name
  const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  
  return (
    <article className={styles.container}>
      {/* Header with Pokemon name */}
      <h1 className={styles.header}>
        {capitalizedName}
      </h1>
      
      {/* Pokemon image */}
      <figure className={styles.imageContainer}>
        <img
          src={data.sprites.other['official-artwork'].front_default || data.sprites.front_default}
          alt={`${capitalizedName}`}
          className={styles.pokemonImage}
        />
      </figure>
      
      {/* Details in table-like format */}
      <dl className={styles.detailsContainer}>
        {/* Name row */}
        <div className={styles.detailRow}>
          <dt className={styles.detailLabel}>Name</dt>
          <dd className={styles.detailValue}>
            <span className={styles.typeValue}>{data.name}</span>
          </dd>
        </div>
        
        {/* Height row */}
        <div className={styles.detailRow}>
          <dt className={styles.detailLabel}>Height</dt>
          <dd className={styles.detailValue}>{(data.height / 10).toFixed(1)} cm</dd>
        </div>
        
        {/* Weight row */}
        <div className={styles.detailRow}>
          <dt className={styles.detailLabel}>Weight</dt>
          <dd className={styles.detailValue}>{(data.weight / 10).toFixed(1)} kg</dd>
        </div>
        
        {/* Types row */}
        <div className={styles.detailRow}>
          <dt className={styles.detailLabel}>Types</dt>
          <dd className={styles.detailValue}>
            <ul className={styles.typesList}>
              {data.types.map((typeInfo) => (
                <li key={typeInfo.type.name} className={styles.typeValue}>
                  {typeInfo.type.name}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        
        {/* Bottom border/separator */}
        <div className="border-t border-gray-300 my-3"></div>
      </dl>
    </article>
  );
};

export default PokemonDetail;
