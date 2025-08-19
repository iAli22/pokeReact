import { useEffect, useState } from 'react';
import styles from '../../styles/components/Notification.module.scss';
import { useNotification } from '../../contexts/NotificationContext';

const NotificationItem = ({ 
  id, 
  message, 
  type, 
  onClose 
}: { 
  id: string; 
  message: string; 
  type: 'info' | 'success' | 'warning' | 'error';
  onClose: (id: string) => void;
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Animation timing
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 4000); // Start exit animation before removal

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // Wait for exit animation
  };

  return (
    <div 
      className={`${styles.notification} ${styles[type]} ${isExiting ? styles.exit : styles.enter}`}
      role="alert"
    >
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <button 
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
};

export const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={removeNotification}
        />
      ))}
    </div>
  );
};

export default NotificationContainer;
