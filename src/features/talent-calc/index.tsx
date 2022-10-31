import { useEffect, useState } from 'react';
import { talentsData } from 'shared/constants/talentsData';
import { useTalentCalc } from './model/useTalentCalc';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';
import styles from './styles.module.scss';
import { createTalentsState } from './lib/transform';

export type HandleTalentChangeArgs = { specialization: string, id: string, value: number };

export const TalentCalc = () => {
  const { currentClass, onClassChange } = useTalentCalc();
  const [talents, setTalents] = useState({});

  useEffect(() => {
    if (!currentClass) {
      return;
    }
    setTalents(createTalentsState(talentsData[currentClass]!));
  }, [currentClass]);

  const handleTalentChange = ({
    specialization,
    id,
    value,
  }: HandleTalentChangeArgs) => {
    setTalents((prev: { [key: typeof specialization]: any }) => ({
      ...prev,
      [specialization]: {
        ...prev[specialization],
        [id]: value,
      },
    }));
  };

  console.log(talents);

  return (
    <div className={styles.wrapper}>
      <ClassChoser
        currentClass={currentClass}
        onClassChange={onClassChange}
      />
      <SpecializationTrees
        currentClass={currentClass}
        onTalentChange={handleTalentChange}
      />
      <Controls />
    </div>
  );
};
