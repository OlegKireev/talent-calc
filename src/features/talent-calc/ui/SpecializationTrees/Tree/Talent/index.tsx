import { MouseEvent } from 'react';
import cx from 'classnames';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { CharacterSpecializationType } from 'shared/constants/global';
import { CharacterTalentIdType } from 'shared/constants/talents';
import { TalentDescription, TalentMaxValueType, TalentTierType } from 'shared/constants/talentsData';
import { AbilityButton } from 'shared/ui/AbilityButton';
import { useTalentPermissions } from './useTalentPermissions';
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
  deepestTierWithValue: TalentTierType
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
  isAvailable,
  onChange,
  getPreviousTotal,
}: TalentProps) => {
  const { canIncrease, canDecrease } = useTalentPermissions({
    tier,
    value,
    max,
    deepestTierWithValue,
    getPreviousTotal,
    isAvailable,
  });

  const handleClick = () => {
    if (canIncrease) {
      onChange({
        specialization,
        id,
        value: value + 1,
      });
    }
  };

  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (canDecrease) {
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
