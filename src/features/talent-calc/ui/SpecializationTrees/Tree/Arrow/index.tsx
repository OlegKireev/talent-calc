import cx from 'classnames';
import { generateArrowClass } from 'features/talent-calc/lib/utils';
import { TalentColumnType, TalentTierType } from 'shared/constants/talentsData';
import styles from './styles.module.scss';

export type ArrowPositionType = {
  tier: TalentTierType,
  column: TalentColumnType,
};

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
