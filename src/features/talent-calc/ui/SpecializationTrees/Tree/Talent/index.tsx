/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MouseEvent } from 'react';
import cx from 'classnames';
import { AbilityButton } from 'shared/ui/AbilityButton';
import { type CharacterSpecializationType } from 'shared/constants/global';
import { type CharacterTalentIdType } from 'shared/constants/talents';
import type { TalentDescriptionType, TalentMaxValueType, TalentTierType } from 'shared/constants/talentsData';
import { type HandleTalentChange } from 'features/talent-calc/types';
import { useTooltipContext } from 'shared/context/tooltip';
import { type GetPreviousTotal } from '../types';
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
  description: TalentDescriptionType
  deepestTierWithValue: TalentTierType
  includeTierTotal: number
  isAvailable: boolean
  isChildrenTalentsEmpty: boolean
  onChange: HandleTalentChange
  getPreviousTotal: GetPreviousTotal
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
  includeTierTotal,
  isAvailable,
  isChildrenTalentsEmpty,
  onChange,
  getPreviousTotal,
}: TalentProps) => {
  const { canIncrease, canDecrease } = useTalentPermissions({
    tier,
    value,
    max,
    deepestTierWithValue,
    includeTierTotal,
    isAvailable,
    isChildrenTalentsEmpty,
    getPreviousTotal,
  });

  const { openTooltip, closeTooltip } = useTooltipContext();

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
      onMouseOver={() => openTooltip({
        type: 'talent',
        title,
      })}
      onMouseOut={closeTooltip}
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
