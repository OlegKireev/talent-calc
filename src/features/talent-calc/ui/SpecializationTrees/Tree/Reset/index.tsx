import { IconCross } from 'shared/icons';
import styles from './styles.module.scss';

interface ResetProps {
  isDisabled: boolean
  onClick: () => void
}

export const Reset = ({
  isDisabled,
  onClick,
}: ResetProps) => (
  <button
    className={styles.wrapper}
    disabled={isDisabled}
    type="button"
    onClick={onClick}
  >
    <IconCross width={16} height={16} color={!isDisabled ? '#c0392b' : 'currentColor'} />
    <span className={styles.title}>
      Reset
    </span>
  </button>
);
