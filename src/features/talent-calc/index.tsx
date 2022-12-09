import { useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { CharacterClassType } from 'shared/constants/global';
import { TALENTS_TEMPLATE } from 'mocks/talents';
import { STATE_SEARCH_PARAM } from 'shared/constants/searchParams';
import { ClassChoser } from './ui/ClassChoser';
import { Status } from './ui/Status';
import { SpecializationTrees } from './ui/SpecializationTrees';
import { generateTalentsState, generateStateString } from './lib/transform';
import { useTalentCalcContext } from './model/context';
import { checkIsTalentsDataRefreshed, getSpecsTotal } from './lib/utils';
import { HandleTreeReset, type HandleTalentChange } from './types';
import { Controls } from './ui/Controls';
import styles from './styles.module.scss';

export const TalentCalc = () => {
  const {
    state,
    total,
    setState,
    setTalents,
    setTotal,
  } = useTalentCalcContext();

  const { characterClass } = useParams();
  const currentClass = characterClass as CharacterClassType | null;
  const [searchParams, setSearchParams] = useSearchParams();

  const stateFromSearchParams = searchParams.get(STATE_SEARCH_PARAM);

  const totalBySpecs = getSpecsTotal(state);
  const isDataRefreshed = checkIsTalentsDataRefreshed(currentClass, state);

  useEffect(() => {
    setTalents(TALENTS_TEMPLATE);
  }, [setTalents]);

  useEffect(() => {
    if (!currentClass || !TALENTS_TEMPLATE[currentClass]) {
      return;
    }

    if (stateFromSearchParams) {
      setState(generateTalentsState(TALENTS_TEMPLATE[currentClass], stateFromSearchParams));
    } else {
      setState(generateTalentsState(TALENTS_TEMPLATE[currentClass]));
    }
  }, [currentClass, setState, stateFromSearchParams]);

  useEffect(() => {
    setTotal(totalBySpecs.reduce((acc, specTotal) => acc + specTotal, 0));
  }, [setTotal, totalBySpecs]);

  const handleTalentChange: HandleTalentChange = ({
    specialization,
    id,
    value,
  }) => {
    if (state) {
      const newState = {
        ...state,
        [specialization]: {
          ...state[specialization],
          [id]: value,
        },
      };
      setSearchParams({ [STATE_SEARCH_PARAM]: generateStateString(newState) });
    }
  };

  const handleTreeReset: HandleTreeReset = (specialization) => {
    if (state) {
      const newState = {
        ...state,
        [specialization]: {},
      };
      setSearchParams({ [STATE_SEARCH_PARAM]: generateStateString(newState) });
    }
  };

  return (
    <div className={styles.wrapper}>
      <ClassChoser
        currentClass={currentClass}
      />
      {currentClass && (
        <>
          <Controls />
          <Status
            currentClass={currentClass}
            specsTotal={totalBySpecs}
            total={total}
          />
        </>
      )}
      {currentClass && TALENTS_TEMPLATE[currentClass] && isDataRefreshed && (
        <SpecializationTrees
          currentClass={currentClass}
          state={state}
          talentsByClass={TALENTS_TEMPLATE[currentClass]}
          onTalentChange={handleTalentChange}
          onTreeReset={handleTreeReset}
        />
      )}
    </div>
  );
};
