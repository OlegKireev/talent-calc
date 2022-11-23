import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type {
  AbilityCastDurationType,
  AbilityCooldownType,
  AbilityCostsType,
  AbilityRangeType,
  TalentDescriptionType,
  TalentMaxValueType,
} from 'shared/constants/talentsData';
import type { TooltipCoordsType, TooltipType } from './types';
import styles from './styles.module.scss';

const MIN_RANK_VALUE = 1;

interface TooltipProps {
  data: TooltipType,
  coords: TooltipCoordsType,
}

export const Tooltip = ({
  data,
  coords,
}: TooltipProps) => {
  const [level, setLevel] = useState<number>(0);
  const [rank, setRank] = useState<TalentMaxValueType>(1);
  const [description, setDescription] = useState<TalentDescriptionType>({ 1: '' });
  const [canIncrease, setCanIncrease] = useState<boolean>(false);
  const [canDecrease, setCanDecrease] = useState<boolean>(false);
  const [cooldown, setCooldown] = useState<AbilityCooldownType | undefined>(0);
  const [costs, setCosts] = useState<AbilityCostsType | undefined>('');
  const [range, setRange] = useState<AbilityRangeType | undefined>(0);
  const [castDuration, setCastDuration] = useState<AbilityCastDurationType | undefined>(0);
  const [shouldDisplayNextRank, setShouldDisplayNextRank] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const { type, title } = data;
  const { x, y } = coords;

  const isTalentType = type === 'talent';
  const nextRankDescription = description[rank + 1 as TalentMaxValueType];
  const shouldDisplayNextRankDescription = shouldDisplayNextRank
    && isTalentType
    && level > 0
    && nextRankDescription;

  const shouldDisplayTip = canIncrease || canDecrease || Boolean(errors.length);

  useEffect(() => {
    if ('rank' in data) {
      setRank(Math.max(data.rank, MIN_RANK_VALUE) as TalentMaxValueType);
      setLevel(data.rank);
      setDescription(data.description);
      setCanIncrease(data.canIncrease);
      setCanDecrease(data.canDecrease);
      setErrors(Object.values(data.errors).filter((err) => Boolean(err)));
      setCosts(data.costs);
      setRange(data.range);
      setCastDuration(data.castDuration);
      setCooldown(data.cooldown);
      setShouldDisplayNextRank(data.shouldDisplayNextRank);
    }
  }, [data]);

  return createPortal(
    (
      <div
        className={styles.wrapper}
        style={{
          top: y,
          left: x,
        }}
      >
        <header className={styles.header}>
          <h3 className={styles.title}>
            {title}
          </h3>
          {Boolean(rank) && (
            <span className={styles.rank}>
              Rank
              {' '}
              {rank}
            </span>
          )}
        </header>
        {isTalentType && (
          <span className={styles.type}>Talent</span>
        )}
        {(costs || range) && (
          <div className={styles.row}>
            {costs && (
              <span className={styles.left}>
                {costs}
              </span>
            )}
            {range && (
              <span className={styles.right}>
                {`${range} yd range`}
              </span>
            )}
          </div>
        )}
        {(castDuration || cooldown) && (
          <div className={styles.row}>
            {castDuration && (
              <span className={styles.left}>
                {castDuration}
              </span>
            )}
            {cooldown && (
              <span className={styles.right}>
                {`${cooldown} sec cooldown`}
              </span>
            )}
          </div>
        )}

        {isTalentType && (
          <p className={styles.desc}>
            {description[rank]}
          </p>
        )}
        {shouldDisplayNextRankDescription && (
          <>
            <span
              className={styles.label}
              style={{
                display: 'block',
                marginTop: '.5rem',
              }}
            >
              Next rank:
            </span>
            <p className={styles.desc}>
              {nextRankDescription}
            </p>
          </>
        )}

        {shouldDisplayTip && (
          <div className={styles.tip}>
            {canIncrease && (
              <span className={styles.action}>
                Click to learn
              </span>
            )}
            {!canIncrease && canDecrease && (
              <span className={styles.action}>
                Right-click to unlearn
              </span>
            )}
            {Boolean(errors.length) && (
              errors.map((error) => (
                <span className={styles.error} key={error}>
                  {error}
                </span>
              ))
            )}
          </div>
        )}

      </div>
    ),
    document.body,
  );
};
