import cx from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children?: ReactNode,
  className?: string,
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  className,
  variant,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const variantClass = variant ? styles[variant] : '';

  return (
    <button
      type="button"
      className={cx(
        styles.button,
        variantClass,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
