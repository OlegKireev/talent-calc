import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { TalentDescriptionType, TalentMaxValueType } from 'shared/constants/talentsData';
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

  const { type, title } = data;
  const { x, y } = coords;

  const isTalentType = type === 'talent';
  const nextRankDescription = description[rank + 1 as TalentMaxValueType];
  const shouldDisplayNextRankDescription = isTalentType && level > 0 && nextRankDescription;
  const shouldDisplayTip = canIncrease || canDecrease;

  useEffect(() => {
    if ('rank' in data) {
      setRank(Math.max(data.rank, MIN_RANK_VALUE) as TalentMaxValueType);
      setLevel(data.rank);
      setDescription(data.description);
      setCanIncrease(data.canIncrease);
      setCanDecrease(data.canDecrease);
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
          </div>
        )}

      </div>
    ),
    document.body,
  );
};
