import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface AbilityButtonProps {
  children: ReactNode
  background?: string,
  isActive?: boolean
  isDisabled?: boolean
  onClick?: () => any
}

export const AbilityButton = ({
  children,
  background,
  isActive,
  isDisabled,
  onClick,
}: AbilityButtonProps) => (
  <button
    type="button"
    className={cx(styles.wrapper, {
      [styles.active]: isActive,
      [styles.withBackground]: Boolean(background),
    })}
    style={{
      backgroundImage: `url("${background}")`,
    }}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);
