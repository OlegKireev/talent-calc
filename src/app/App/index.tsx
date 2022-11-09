import { TalentCalc } from 'features/talent-calc';
import { TalentCalcProvider } from 'features/talent-calc/model/context';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { TooltipProvider } from 'shared/context/tooltip';
import { Layout } from '../Layout';
import styles from './styles.module.scss';

export const App = () => (
  <TooltipProvider>
    <TalentCalcProvider>
      <div className={styles.wrapper}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TalentCalc />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    </TalentCalcProvider>
  </TooltipProvider>
);
