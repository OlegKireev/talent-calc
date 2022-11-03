import { Fragment } from 'react';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { TalentsDataType } from 'features/talent-calc/lib/transform';
import {
  checkCanDecreaseByNextTier,
  checkIsTierAvailable, getDeepestTierWithValue, getTierTotal, getTreeTotal,
} from 'features/talent-calc/lib/utils';
import { TalentTierType, TalentType } from 'shared/constants/talentsData';
import { numberToArray } from 'shared/lib/transform';
import { CharacterSpecializationType } from 'shared/constants/global';
import { Talent } from './Talent';
import styles from './styles.module.scss';

export interface TreeProps {
  data: TalentsDataType,
  title: CharacterSpecializationType
  talents: TalentType[]
  backgroundImage?: string
  onTalentChange: (args: HandleTalentChangeArgs) => void
}

export const Tree = ({
  data,
  title,
  talents,
  backgroundImage,
  onTalentChange,
}: TreeProps) => {
  const maxRows = talents.sort((a, b) => b.tier - a.tier)[0].tier;
  const rows = numberToArray(maxRows) as TalentTierType[];

  const deepestTierWithValue = getDeepestTierWithValue(talents, data);
  const total = getTreeTotal(data);
  const deepestTierTotal = getTierTotal(deepestTierWithValue, talents, data);

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <table className={styles.table}>
        <tbody>
          {rows.map((row) => {
            let spaceBetweenCells = 0;
            const tierTotal = getTierTotal(row, talents, data);
            const hasNextTierValue = Boolean(
              getTierTotal(row + 1 as TalentTierType, talents, data),
            );
            const canDecreaseByNextTier = checkCanDecreaseByNextTier(hasNextTierValue, tierTotal);

            return (
              <tr key={`row-${row}`}>
                {talents
                  .filter((talent) => talent.tier === row)
                  .map((talent, i) => {
                    const cellOffset = talent.column - (i + 1 + spaceBetweenCells);
                    if (cellOffset > 0) {
                      spaceBetweenCells += 1;
                    }
                    const emplyCells = numberToArray(cellOffset);
                    const isTierAvailable = checkIsTierAvailable(total, tierTotal, talent.tier);

                    return (
                      <Fragment key={`tier${row}-${talent.title}`}>
                        {emplyCells.map((cell) => (
                          <td key={cell} className={styles.cell} />
                        ))}
                        <td className={styles.cell}>
                          <Talent
                            key={talent.title}
                            value={data[talent.id]}
                            title={talent.title}
                            description={talent.description}
                            max={talent.max}
                            id={talent.id}
                            icon={talent.icon}
                            specialization={title}
                            tier={row}
                            total={total - deepestTierTotal}
                            deepestTierWithValue={deepestTierWithValue}
                            isAvailable={isTierAvailable}
                            canDecreaseByNextTier={canDecreaseByNextTier}
                            onChange={onTalentChange}
                          />
                        </td>
                      </Fragment>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>
        {`${title} (${total})`}
      </h4>
    </div>
  );
};
