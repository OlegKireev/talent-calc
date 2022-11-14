import { CharacterClassType, CHARACTER_COLORS } from 'shared/constants/global';
import styles from './styles.module.scss';

interface StatusProps {
  currentClass: CharacterClassType
}

export const Status = ({
  currentClass,
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
      0 / 0 / 0
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
