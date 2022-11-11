import { MouseEvent, useEffect, useState } from 'react';
import cx from 'classnames';
import { AbilityButton } from 'shared/ui/AbilityButton';
import { type CharacterSpecializationType } from 'shared/constants/global';
import { type CharacterTalentIdType } from 'shared/constants/talents';
import type { TalentDescriptionType, TalentMaxValueType, TalentTierType } from 'shared/constants/talentsData';
import { type HandleTalentChange } from 'features/talent-calc/types';
import { useTooltipContext } from 'shared/context/tooltip';
import { type TooltipErrorsType } from 'shared/ui/Tooltip/types';
import { getTotalToUnblockNextTier } from 'features/talent-calc/lib/utils';
import { useTalentCalcContext } from 'features/talent-calc/model/context';
import { type GetPreviousTotal } from '../types';
import { useTalentPermissions } from './useTalentPermissions';
import styles from './styles.module.scss';

export interface TalentProps {
  title: string;
  icon: string
  id: CharacterTalentIdType
  value?: number
  max: TalentMaxValueType
  requiredTalentId?: CharacterTalentIdType
  specialization: CharacterSpecializationType
  tier: TalentTierType
  description: TalentDescriptionType
  deepestTierWithValue: TalentTierType
  includeTierTotal: number
  isTierAvailable: boolean
  isRequiredTalentHasValue: boolean
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
  requiredTalentId,
  specialization,
  tier,
  description,
  deepestTierWithValue,
  includeTierTotal,
  isTierAvailable,
  isRequiredTalentHasValue,
  isChildrenTalentsEmpty,
  onChange,
  getPreviousTotal,
}: TalentProps) => {
  const [errors, setErrors] = useState<TooltipErrorsType>({
    isDisabledByTotal: '',
    isDisabledByParent: '',
  });
  const { allTalents } = useTalentCalcContext();

  const requiredTalentTitle = requiredTalentId ? allTalents[requiredTalentId]?.title : '';
  const isAvailable = isTierAvailable && isRequiredTalentHasValue;

  useEffect(() => {
    setErrors({
      isDisabledByTotal: !isTierAvailable
        ? `Required ${getTotalToUnblockNextTier(tier - 1)} points in ${specialization} talents`
        : '',
      isDisabledByParent: !isRequiredTalentHasValue
        ? `Required 1 point in ${requiredTalentTitle}`
        : '',
    });
  }, [isTierAvailable, isRequiredTalentHasValue, specialization, tier, requiredTalentTitle]);

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

  const {
    openTooltip, closeTooltip, refreshLastTooltip, data,
  } = useTooltipContext();

  useEffect(() => {
    if (data.title === title) {
      refreshLastTooltip({
        type: 'talent',
        title,
        rank: value,
        description,
        canIncrease,
        canDecrease,
        errors,
      });
    }
  }, [
    data.title,
    title,
    value,
    description,
    canDecrease,
    canIncrease,
    refreshLastTooltip,
    errors,
    requiredTalentTitle,
  ]);

  const handleOpenTooltip = (rank: number, event: MouseEvent<HTMLElement>) => {
    openTooltip({
      type: 'talent',
      title,
      description,
      rank,
      canIncrease,
      canDecrease,
      errors,
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
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
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
