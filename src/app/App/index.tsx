import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { TalentCalc } from 'features/talent-calc';
import { TalentCalcProvider } from 'features/talent-calc/model/context';
import { TooltipProvider } from 'shared/context/tooltip';
import { Layout } from '../Layout';

export const App = () => (
  <TooltipProvider>
    <TalentCalcProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<TalentCalc />} />
            <Route path=":characterClass" element={<TalentCalc />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TalentCalcProvider>
  </TooltipProvider>
);
