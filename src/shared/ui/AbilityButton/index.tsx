import { MouseEvent, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface AbilityButtonProps {
  children?: ReactNode
  background?: string,
  isActive?: boolean
  isDisabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any
  onRightClick?: (e: MouseEvent<HTMLButtonElement>) => any
}

export const AbilityButton = ({
  children,
  background,
  isActive,
  isDisabled,
  onClick,
  onRightClick,
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
    onContextMenu={onRightClick}
  >
    {children}
  </button>
);
