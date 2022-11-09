import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';
import { TooltipCoordsType, TooltipType } from './types';

const MIN_RANK_VALUE = 1;

interface TooltipProps {
  data: TooltipType,
  coords: TooltipCoordsType,
}

export const Tooltip = ({
  data,
  coords,
}: TooltipProps) => {
  const { title } = data;
  const [rank, setRank] = useState<number>(1);

  useEffect(() => {
    if ('rank' in data) {
      setRank(Math.max(data.rank, MIN_RANK_VALUE));
    }
  }, [data]);

  const { x, y } = coords;

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
      </div>
    ),
    document.body,
  );
};
