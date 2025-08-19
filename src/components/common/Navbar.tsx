import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/components/Navbar.module.scss';

interface NavbarProps {
  pokemonName?: string;
}

const Navbar = ({ pokemonName }: NavbarProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <nav>
          <div className={styles.title}>
            {isHomePage ? (
              <h1>PokeReact</h1>
            ) : (
              <>
                <Link to="/" className={styles.link}>
                <h1>PokeReact /</h1>
                </Link>
                <span className={styles.pokemonName}>{pokemonName}</span>
              </>
            )}
          </div>
        </nav>
        <div className={styles.actions}>
          {/* Actions area */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
