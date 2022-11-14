import { CharacterClassType, CHARACTER_COLORS } from 'shared/constants/global';
import cx from 'classnames';
import styles from './styles.module.scss';

interface StatusProps {
  currentClass: CharacterClassType
  specsTotal: number[]
}

export const Status = ({
  currentClass,
  specsTotal,
}: StatusProps) => (
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
    <span className={styles.property}>
      Required level:
      {' '}
      <strong>55</strong>
    </span>
    <span className={styles.property}>
      Points left:
      {' '}
      <strong>70</strong>
    </span>
  </div>
);
