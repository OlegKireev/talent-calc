import { TalentType } from 'shared/constants/talentsData';
import { Fragment } from 'react';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { TalentsDataType } from 'features/talent-calc/lib/transform';
import { numberToArray } from 'shared/lib/transform';
import { Talent } from './Talent';
import styles from './styles.module.scss';

export interface TreeProps {
  data: TalentsDataType,
  title: string
  talents: TalentType[]
  backgroundImage?: string
  onTalentChange: ({ specialization, id, value }: HandleTalentChangeArgs) => void
}

export const Tree = ({
  data,
  title,
  talents,
  backgroundImage,
  onTalentChange,
}: TreeProps) => {
  const maxRows = talents.sort((a, b) => b.tier - a.tier)[0].tier;
  const rows = numberToArray(maxRows);

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

                    return (
                      <Fragment key={`tier${row}-${talent.title}`}>
                        {emplyCells.map((cell) => (
                          <td key={cell} />
                        ))}
                        <td>
                          <Talent
                            key={talent.title}
                            value={(!!data && Object.hasOwn(data, talent.id)) ? data[talent.id] : 0}
                            title={talent.title}
                            description={talent.description[1]}
                            max={talent.max}
                            id={talent.id}
                            icon={talent.icon}
                            specialization={title}
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
        {title}
      </h4>
    </div>
  );
};
