import { useTooltipContext } from 'shared/context/tooltip';
import { Button } from 'shared/ui/Button';
import styles from './styles.module.scss';

export const Controls = () => {
  const { openTooltip, closeTooltip } = useTooltipContext();

  const handleShareClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    window.navigator.clipboard.writeText(window.location.href);
    openTooltip({ title: 'Copied', type: 'default', isOpen: false }, e);
    setTimeout(() => closeTooltip(), 1000);
  };

  return (
    <div className={styles.wrapper}>
      <Button variant="primary" onClick={handleShareClick}>
        Share
      </Button>
    </div>
  );
};
