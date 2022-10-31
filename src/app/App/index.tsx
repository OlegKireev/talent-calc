import { TalentCalc } from 'features/talent-calc';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Layout } from '../Layout';
import styles from './styles.module.scss';

export const App = () => (
  <div className={styles.wrapper}>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TalentCalc />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </div>
);
