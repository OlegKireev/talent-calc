import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface AbilityButtonProps {
  children: ReactNode
  isActive: boolean
  isDisabled: boolean
  onClick: () => any
}

export const AbilityButton = ({
  children,
  isActive,
  isDisabled,
  onClick,
}: AbilityButtonProps) => (
  <button
    type="button"
    className={cx(styles.wrapper, {
      [styles.active]: isActive,
    })}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);
