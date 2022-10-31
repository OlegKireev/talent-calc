import { CharacterClassUnion } from 'shared/constants/global';
import { talentsData } from 'shared/constants/talentsData';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { Tree } from './Tree';
import styles from './styles.module.scss';

interface SpecializationTreesProps {
  currentClass: CharacterClassUnion | null
  onTalentChange: ({ specialization, id, value }: HandleTalentChangeArgs) => void
}
export const SpecializationTrees = ({
  currentClass,
  onTalentChange,
}: SpecializationTreesProps) => {
  if (!currentClass) {
    return null;
  }

  const talentsByClass = talentsData[currentClass];

  return (
    <div className={styles.wrapper}>
      {talentsByClass?.map((specializationData) => (
        <Tree
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
