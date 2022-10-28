import { TalentCalc } from 'features/talent-calc';
import { Layout } from '../Layout';
import styles from './styles.module.scss';

export const App = () => (
  <div className={styles.wrapper}>
    <Layout>
      <TalentCalc />
    </Layout>
  </div>
);
