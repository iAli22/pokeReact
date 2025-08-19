import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import styles from '../styles/pages/NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page Not Found</p>
      <p className={styles.description}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <div className={styles.actions}>
        <Button variant="primary" size="large">
          <Link to="/" className={styles.homeLink}>Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
