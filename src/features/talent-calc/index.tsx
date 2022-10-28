import { useTalentCalc } from './model/useTalentCalc';
import { ClassChoser } from './ui/ClassChoser';
import { Controls } from './ui/Controls';
import { SpecializationTrees } from './ui/SpecializationTrees';

export const TalentCalc = () => {
  const { state, setState } = useTalentCalc();
  console.log(state, setState);

  return (
    <div>
      <ClassChoser />
      <SpecializationTrees />
      <Controls />
    </div>
  );
};
