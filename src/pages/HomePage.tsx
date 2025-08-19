import React from 'react';
import PokemonList from '../features/pokemon/components/PokemonList';
import styles from '../styles/pages/HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <PokemonList />
      </div>
    </div>
  );
};

export default HomePage;
