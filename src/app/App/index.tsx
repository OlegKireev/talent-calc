import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { TalentCalc } from 'features/talent-calc';
import { TalentCalcProvider } from 'features/talent-calc/model/context';
import { TooltipProvider } from 'shared/context/tooltip';
import { Layout } from '../Layout';
import styles from './styles.module.scss';

export const App = () => (
  <TooltipProvider>
    <TalentCalcProvider>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<TalentCalc />} />
              <Route path=":characterClass" element={<TalentCalc />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </TalentCalcProvider>
  </TooltipProvider>
);
