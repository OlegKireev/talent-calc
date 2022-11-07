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
  tierTotal: number
  previousTiersTotal: number
  isAvailable: boolean
  onChange: (args: HandleTalentChangeArgs) => void
  getPreviousTotal: (tier: TalentTierType | number) => number
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
  tierTotal,
  previousTiersTotal,
  isAvailable,
  onChange,
  getPreviousTotal,
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
    const canDecrease = checkCanDecrease(deepestTierWithValue, previousTiersTotal);
    const prePreviousDeepestTierTotal = getPreviousTotal(deepestTierWithValue);

    const willNextTierAvailable = prePreviousDeepestTierTotal > (deepestTierWithValue - 1) * 5;
    const willCurrentTierAvailble = previousTiersTotal + tierTotal > tier * 5;

    if (isAvailable
      && (
        (canDecrease && willNextTierAvailable && willCurrentTierAvailble)
        || tier === deepestTierWithValue)
      && value > 0
    ) {
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
