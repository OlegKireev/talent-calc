import { MouseEvent, useEffect, useState } from 'react';
import cx from 'classnames';
import { AbilityButton } from 'shared/ui/AbilityButton';
import { type CharacterSpecializationType } from 'shared/constants/global';
import type { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { type HandleTalentChange } from 'features/talent-calc/types';
import { useTooltipContext } from 'shared/context/tooltip';
import { type TooltipErrorsType } from 'shared/ui/Tooltip/types';
import { getTotalToUnblockNextTier } from 'features/talent-calc/lib/utils';
import { useTalentCalcContext } from 'features/talent-calc/model/context';
import { type GetPreviousTotal } from '../types';
import { useTalentPermissions } from './useTalentPermissions';
import styles from './styles.module.scss';

export interface TalentProps {
  data: TalentType
  value?: number
  specialization: CharacterSpecializationType
  deepestTierWithValue: TalentTierType
  includeTierTotal: number
  isTierAvailable: boolean
  isRequiredTalentHasValue: boolean
  isChildrenTalentsEmpty: boolean
  getPreviousTotal: GetPreviousTotal
  onChange: HandleTalentChange
}

export const Talent = ({
  data,
  value = 0,
  specialization,
  deepestTierWithValue,
  includeTierTotal,
  isTierAvailable,
  isRequiredTalentHasValue,
  isChildrenTalentsEmpty,
  getPreviousTotal,
  onChange,
}: TalentProps) => {
  const {
    title,
    id,
    icon,
    max,
    tier,
    description,
    required,
    cooldown,
    range,
    castDuration,
    costs,
  } = data;
  const [errors, setErrors] = useState<TooltipErrorsType>({
    isDisabledByTotal: '',
    isDisabledByParent: '',
  });
  const { allTalents, total } = useTalentCalcContext();

  const requiredTalentTitle = required ? allTalents[required]?.title || '' : '';
  const requiredTalentMax = required ? allTalents[required]?.max || 0 : 0;
  const isAvailable = isTierAvailable && isRequiredTalentHasValue;

  useEffect(() => {
    setErrors({
      isDisabledByTotal: !isTierAvailable
        ? `Required ${getTotalToUnblockNextTier(tier - 1)} points in ${specialization} talents`
        : '',
      isDisabledByParent: !isRequiredTalentHasValue
        ? `Required ${requiredTalentMax} point${requiredTalentMax > 1 ? 's' : ''} in ${requiredTalentTitle}`
        : '',
    });
  }, [
    isTierAvailable,
    isRequiredTalentHasValue,
    specialization,
    tier,
    requiredTalentTitle,
    requiredTalentMax,
  ]);

  const { canIncrease, canDecrease } = useTalentPermissions({
    tier,
    value,
    max,
    total,
    deepestTierWithValue,
    includeTierTotal,
    isAvailable,
    isChildrenTalentsEmpty,
    getPreviousTotal,
  });

  const {
    openTooltip, closeTooltip, refreshLastTooltip, data: tooltipData,
  } = useTooltipContext();

  useEffect(() => {
    if (tooltipData.title === title) {
      refreshLastTooltip({
        type: 'talent',
        title,
        rank: value,
        description,
        cooldown,
        range,
        costs,
        castDuration,
        canIncrease,
        canDecrease,
        errors,
      });
    }
  }, [
    tooltipData.title,
    title,
    value,
    description,
    cooldown,
    range,
    costs,
    castDuration,
    canDecrease,
    canIncrease,
    refreshLastTooltip,
    errors,
  ]);

  const handleOpenTooltip = (rank: number, event: MouseEvent<HTMLElement>) => {
    openTooltip({
      type: 'talent',
      title,
      rank,
      description,
      cooldown,
      range,
      costs,
      castDuration,
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
