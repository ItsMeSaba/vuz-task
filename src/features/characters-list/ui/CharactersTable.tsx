import { CharacterTableHeader } from "./CharacterTableHeader";
import { CharacterTableRow } from "./CharacterTableRow";
import { Character } from "@/shared/types/global";
import styles from "./styles.module.scss";

interface CharactersTableProps {
  characters: Character[];
}

export function CharactersTable({ characters }: CharactersTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <CharacterTableHeader />

        <tbody>
          {characters?.map((character) => (
            <CharacterTableRow key={character.id} character={character} />
          ))}

          {!characters?.length && (
            <tr>
              <td colSpan={7} className={styles.noCharactersFound}>
                No characters found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
