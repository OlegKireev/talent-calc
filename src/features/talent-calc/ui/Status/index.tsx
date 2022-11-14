import {
  type CharacterClassType, CHARACTER_COLORS, FIRST_TALTNT_CHARACTER_LEVEL, MAX_TALENTS_POINTS,
} from 'shared/constants/global';
import cx from 'classnames';
import styles from './styles.module.scss';

interface StatusProps {
  currentClass: CharacterClassType
  specsTotal: number[]
  total: number
}

export const Status = ({
  currentClass,
  specsTotal,
  total,
}: StatusProps) => {
  const pointsLeft = MAX_TALENTS_POINTS - total;
  const requiedLevel = FIRST_TALTNT_CHARACTER_LEVEL - 1 + total;
  const shouldRenderRequiredLevel = requiedLevel >= FIRST_TALTNT_CHARACTER_LEVEL;

  return (
    <div className={styles.wrapper}>
      <span
        className={styles.class}
        style={{ color: CHARACTER_COLORS[currentClass] }}
      >
        {currentClass}
        :
      </span>
      <span className={styles.state}>
        <span className={cx({ [styles.bold]: Boolean(specsTotal[0]) })}>
          {specsTotal[0]}
        </span>
        {' '}
        /
        {' '}
        <span className={cx({ [styles.bold]: Boolean(specsTotal[1]) })}>
          {specsTotal[1]}
        </span>
        {' '}
        /
        {' '}
        <span className={cx({ [styles.bold]: Boolean(specsTotal[2]) })}>
          {specsTotal[2]}
        </span>
      </span>
      {shouldRenderRequiredLevel && (
        <span className={styles.property}>
          Required level:
          {' '}
          <strong>{requiedLevel}</strong>
        </span>
      )}
      <span className={styles.property}>
        Points left:
        {' '}
        <strong>{pointsLeft}</strong>
      </span>
    </div>
  );
};
