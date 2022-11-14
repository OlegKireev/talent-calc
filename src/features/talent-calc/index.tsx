import { useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { CharacterClassType } from 'shared/constants/global';
import { TALENTS_TEMPLATE } from 'mocks/talents';
import { STATE_SEARCH_PARAM } from 'shared/constants/searchParams';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';
import { generateTalentsState, generateStateString } from './lib/transform';
import { useTalentCalcContext } from './model/context';
import { checkIsTalentsDataRefreshed } from './lib/utils';
import { type HandleTalentChange } from './types';
import styles from './styles.module.scss';

export const TalentCalc = () => {
  const {
    state,
    setState,
    setTalents,
  } = useTalentCalcContext();

  const { characterClass } = useParams();
  const currentClass = characterClass as CharacterClassType | null;
  const [searchParams, setSearchParams] = useSearchParams();

  const stateFromSearchParams = searchParams.get(STATE_SEARCH_PARAM);

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
      setState(newState);
      setSearchParams({ [STATE_SEARCH_PARAM]: generateStateString(newState) });
    }
  };

  return (
    <div className={styles.wrapper}>
      <ClassChoser
        currentClass={currentClass}
      />
      {currentClass && TALENTS_TEMPLATE[currentClass] && isDataRefreshed ? (
        <SpecializationTrees
          currentClass={currentClass}
          state={state}
          talentsByClass={TALENTS_TEMPLATE[currentClass]}
          onTalentChange={handleTalentChange}
        />
      ) : <div className={styles.placeholder} />}
      <Controls />
    </div>
  );
};
