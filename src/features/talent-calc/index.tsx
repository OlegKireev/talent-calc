import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterClassType } from 'shared/constants/global';
import { TALENTS_TEMPLATE } from 'mocks/talents';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';
import { createTalentsState } from './lib/transform';
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

  const isDataRefreshed = checkIsTalentsDataRefreshed(currentClass, state);

  useEffect(() => {
    setTalents(TALENTS_TEMPLATE);
  }, [setTalents]);

  useEffect(() => {
    if (!currentClass || !TALENTS_TEMPLATE[currentClass]) {
      return;
    }
    setState(createTalentsState(TALENTS_TEMPLATE[currentClass]));
  }, [currentClass, setState]);

  const handleTalentChange: HandleTalentChange = ({
    specialization,
    id,
    value,
  }) => {
    if (state) {
      setState({
        ...state,
        [specialization]: {
          ...state[specialization],
          [id]: value,
        },
      });
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
