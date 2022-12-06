import { Reset } from '../Reset';
import styles from './styles.module.scss';

interface FooterProps {
  treeTotal: number
  onTreeReset: () => void
}

export const Footer = ({
  treeTotal,
  onTreeReset,
}: FooterProps) => (
  <div className={styles.wrapper}>
    <Reset
      isDisabled={!treeTotal}
      onClick={onTreeReset}
    />
  </div>
);
