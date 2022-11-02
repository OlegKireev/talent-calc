import { Fragment } from 'react';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { TalentsDataType } from 'features/talent-calc/lib/transform';
import { getDeepestTierWithValue, getTierTotal } from 'features/talent-calc/lib/utils';
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
  const total = Object.values(data).reduce((acc, cur) => acc + cur, 0);

  const deepestTierWithValue = getDeepestTierWithValue(talents, data);

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <table>
        <tbody>
          {rows.map((row) => {
            let spaceBetweenCells = 0;
            const tierTotal = getTierTotal(row, talents, data);

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
                    const isTierAvailable = total - tierTotal > (talent.tier - 1) * 5 - 1;

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
                            total={total}
                            deepestTierWithValue={deepestTierWithValue}
                            isAvailable={isTierAvailable}
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
