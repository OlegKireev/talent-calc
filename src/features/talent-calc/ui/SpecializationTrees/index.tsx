import { CharacterClassType } from 'shared/constants/global';
import { TaletsOfClassType } from 'shared/constants/talentsData';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { CreateTaletsStateReturn } from 'features/talent-calc/lib/transform';
import { Tree } from './Tree';
import styles from './styles.module.scss';

interface SpecializationTreesProps {
  currentClass: CharacterClassType | null
  talentsByClass: TaletsOfClassType[],
  state: CreateTaletsStateReturn,
  onTalentChange: (args: HandleTalentChangeArgs) => void
}
export const SpecializationTrees = ({
  currentClass,
  talentsByClass,
  state,
  onTalentChange,
}: SpecializationTreesProps) => {
  if (!currentClass) {
    return null;
  }

  if (!state || !Object.keys(state).length || !talentsByClass?.length) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      {talentsByClass.map((specializationData) => (
        <Tree
          state={state[specializationData.title]!}
          title={specializationData.title}
          talents={specializationData.talents}
          backgroundImage={specializationData.backgroundImage}
          key={specializationData.title}
          onTalentChange={onTalentChange}
        />
      ))}
    </div>
  );
};
