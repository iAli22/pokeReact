import React from 'react';
import { Link } from 'react-router-dom';
import PokemonDetail from '../features/pokemon/components/PokemonDetail';
import styles from '../styles/pages/PokemonDetailPage.module.scss';

const PokemonDetailPage: React.FC = () => {  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <Link to="/" className={styles.backLink}>
            <svg className={styles.backIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Pokémon List
          </Link>
        </div>
        <PokemonDetail />
      </div>
    </div>
  );
};

export default PokemonDetailPage;
