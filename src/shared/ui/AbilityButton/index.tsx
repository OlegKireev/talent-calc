import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface AbilityButtonProps {
  children?: ReactNode
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
      backgroundImage: `url("https://wow.zamimg.com/images/Icon/large/border/default.png"), url("${background}")`,
    }}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);
