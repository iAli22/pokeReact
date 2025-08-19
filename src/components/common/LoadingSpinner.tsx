import React from 'react';
import styles from '../../styles/components/LoadingSpinner.module.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer} role="status">
      <div className={styles.spinner}></div>
      <span className={styles.srOnly}>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
