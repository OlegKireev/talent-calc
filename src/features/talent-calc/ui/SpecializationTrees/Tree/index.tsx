import { TalentType } from 'shared/constants/talentsData';
import { Fragment } from 'react';
import { HandleTalentChangeArgs } from 'features/talent-calc';
import { Talent } from './Talent';
import styles from './styles.module.scss';

export interface TreeProps {
  title: string
  talents: TalentType[]
  backgroundImage?: string
  onTalentChange: ({ specialization, id, value }: HandleTalentChangeArgs) => void
}

const numberToArray = (number: number) => new Array(Math.max(number, 0))
  .fill(0)
  .map((_, i) => i + 1);

export const Tree = ({
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
