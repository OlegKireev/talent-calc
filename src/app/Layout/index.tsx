import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({
  children,
}: LayoutProps) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      header
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      footer
    </footer>
  </div>
);
