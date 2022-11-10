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

  const handleOpenTooltip = (rank: number, event: MouseEvent<HTMLElement>) => {
    openTooltip({
      type: 'talent',
      title,
      description,
      rank,
    }, event);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (canIncrease) {
      const newValue = value + 1;
      onChange({
        specialization,
        id,
        value: newValue,
      });
      handleOpenTooltip(newValue, event);
    }
  };

  const handleRightClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (canDecrease) {
      const newValue = value - 1;
      onChange({
        specialization,
        id,
        value: newValue,
      });
      handleOpenTooltip(newValue, event);
    }
  };

  const hanldeMouseOver = (event: MouseEvent<HTMLElement>) => handleOpenTooltip(value, event);
  const handleMouseOut = () => closeTooltip();

  return (
    <div
      className={cx(styles.wrapper, {
        [styles.available]: isAvailable,
        [styles.max]: value === max,
      })}
      onMouseOver={hanldeMouseOver}
      onMouseOut={handleMouseOut}
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
