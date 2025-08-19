import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import styles from '../styles/layouts/MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { name } = useParams<{ name?: string }>();
  
  return (
    <div className={styles.layout}>
      <Navbar pokemonName={name} />
      <main id="main-content" className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
