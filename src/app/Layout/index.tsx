import { ReactNode } from 'react';
import { useTooltipContext } from 'shared/context/tooltip';
import { Tooltip } from 'shared/ui/Tooltip';
import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({
  children,
}: LayoutProps) => {
  const { isOpen, data, coords } = useTooltipContext();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src="images/logo/logo-512.png" alt="World of warcraft - Wrath of the Lich King Logo" width="200" />
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer} />
      {isOpen && (
        <Tooltip data={data} coords={coords} />
      )}
    </div>
  );
};
