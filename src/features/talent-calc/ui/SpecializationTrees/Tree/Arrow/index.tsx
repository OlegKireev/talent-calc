import cx from 'classnames';
import { generateArrowClass } from 'features/talent-calc/lib/utils';
import { type ArrowPositionType } from 'features/talent-calc/types';
import styles from './styles.module.scss';

export interface ArrowProps {
  from: ArrowPositionType,
  to: ArrowPositionType,
  isAvailable: boolean,
}

export const Arrow = ({
  from,
  to,
  isAvailable,
}: ArrowProps) => {
  const arrowClass = generateArrowClass({ from, to });

  return (
    <div
      className={cx(
        styles.wrapper,
        styles[arrowClass],

        {
          [styles.disabled]: !isAvailable,
        },
      )}
      data-rows={to.tier - from.tier}
    />
  );
};
