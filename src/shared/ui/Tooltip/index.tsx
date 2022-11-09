import { createPortal } from 'react-dom';
import styles from './styles.module.scss';
import { TooltipType } from './types';

interface TooltipProps {
  data: TooltipType,
}

export const Tooltip = ({
  data,
}: TooltipProps) => {
  const { title } = data;
  return createPortal(
    (
      <div className={styles.wrapper}>
        {title}
      </div>
    ),
    document.body,
  );
};
