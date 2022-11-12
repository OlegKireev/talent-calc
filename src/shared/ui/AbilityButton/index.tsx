import { MouseEvent, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface AbilityButtonProps {
  children?: ReactNode
  background?: string,
  isSelected?: boolean
  isDimmed?: boolean
  isDisabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any
  onRightClick?: (e: MouseEvent<HTMLButtonElement>) => any
}

export const AbilityButton = ({
  children,
  background,
  isSelected,
  isDimmed,
  isDisabled,
  onClick,
  onRightClick,
}: AbilityButtonProps) => {
  const Tag = (Boolean(onClick) || Boolean(onRightClick)) ? 'button' : 'div';

  const handlerProps = {
    onClick,
    onContextMenu: onRightClick,
  };

  const restProps = Tag === 'button' ? handlerProps : {};

  return (
    <Tag
      type="button"
      className={cx(styles.wrapper, {
        [styles.dimmed]: isDimmed,
        [styles.selected]: isSelected,
        [styles.withBackground]: Boolean(background),
      })}
      style={{
        backgroundImage: `url("https://wow.zamimg.com/images/Icon/large/border/default.png"), url("${background}")`,
      }}
      disabled={isDisabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      {children}
    </Tag>
  );
};
