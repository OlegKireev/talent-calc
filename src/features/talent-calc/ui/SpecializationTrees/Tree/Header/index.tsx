import cx from 'classnames';
import { CharacterSpecializationType, MAX_TALENTS_POINTS } from 'shared/constants/global';
import { snakeCaseToString } from 'shared/lib/transform';
import styles from './styles.module.scss';

interface HeaderProps {
  title: CharacterSpecializationType
  total: number
  icon: string
}

export const Header = ({
  title,
  total,
  icon,
}: HeaderProps) => (
  <div className={cx(styles.wrapper, {
    [styles.highlight]: Boolean(total),
  })}
  >
    <div
      className={styles.icon}
      style={{
        backgroundImage: `url(${icon})`,
      }}
    />
    <h4 className={styles.title}>
      {snakeCaseToString(title)}
    </h4>
    <span className={styles.count}>
      {total}
      /
      {MAX_TALENTS_POINTS}
    </span>
  </div>
);
