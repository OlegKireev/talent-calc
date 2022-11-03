import { MouseEvent } from 'react';
import cx from 'classnames';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { checkCanDecrease } from 'features/talent-calc/lib/utils';
import { CharacterSpecializationType } from 'shared/constants/global';
import { CharacterTalentIdType } from 'shared/constants/talents';
import { TalentDescription, TalentMaxValueType, TalentTierType } from 'shared/constants/talentsData';
import { AbilityButton } from 'shared/ui/AbilityButton';
import styles from './styles.module.scss';

export interface TalentProps {
  title: string;
  icon: string
  id: CharacterTalentIdType
  value?: number
  max: TalentMaxValueType
  specialization: CharacterSpecializationType
  tier: TalentTierType
  description: TalentDescription
  deepestTierWithValue: number
  total: number
  isAvailable: boolean
  canDecreaseByNextTier: boolean
  onChange: (args: HandleTalentChangeArgs) => void
}

export const Talent = ({
  title,
  icon,
  id,
  value = 0,
  max,
  specialization,
  tier,
  description,
  deepestTierWithValue,
  total,
  isAvailable,
  canDecreaseByNextTier,
  onChange,
}: TalentProps) => {
  const handleClick = () => {
    if (isAvailable && value < max) {
      onChange({
        specialization,
        id,
        value: value + 1,
      });
    }
  };
  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const canDecrease = checkCanDecrease(deepestTierWithValue, total, tier);

    if (isAvailable && canDecrease && canDecreaseByNextTier && value > 0) {
      onChange({
        specialization,
        id,
        value: value - 1,
      });
    }
  };

  return (
    <div
      className={cx(styles.wrapper, {
        [styles.available]: isAvailable,
        [styles.max]: value === max,
      })}
    >
      <AbilityButton
        background={icon}
        isDisabled={!isAvailable}
        onClick={handleClick}
        onRightClick={handleRightClick}
      />
      <span className={styles.value}>{`${value}/${max}`}</span>
    </div>
  );
};
