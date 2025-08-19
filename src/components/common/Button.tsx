import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from '../../styles/components/Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  fullWidth = false,
  isLoading = false,
  icon,
  disabled,
  ...rest
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    isLoading ? styles.loading : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && <span className={styles.spinner} />}
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
