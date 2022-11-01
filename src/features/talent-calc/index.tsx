import { useEffect, useState } from 'react';
import { talentsData } from 'shared/constants/talentsData';
import { useTalentCalc } from './model/useTalentCalc';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';
import { createTalentsState, TalentsDataReturn } from './lib/transform';
import styles from './styles.module.scss';

export type HandleTalentChangeArgs = { specialization: string, id: string, value: number };

export const TalentCalc = () => {
  const { currentClass, onClassChange } = useTalentCalc();
  const [talents, setTalents] = useState<TalentsDataReturn>({});

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

  return (
    <div className={styles.wrapper}>
      <ClassChoser
        currentClass={currentClass}
        onClassChange={onClassChange}
      />
      <SpecializationTrees
        currentClass={currentClass}
        data={talents}
        onTalentChange={handleTalentChange}
      />
      <Controls />
    </div>
  );
};
