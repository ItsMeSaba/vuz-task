import {
  toggleChosenCharacter,
  toggleFilter,
} from "app/store/slices/characters.slice";
import { capitalizeFirstLetter } from "shared/utils/capitilize-first-letter";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { getAbilityScores } from "../helpers/get-ability-scores";
import { PillButton } from "shared/ui/pill-button/PillButton";
import { selectChosenCharacters } from "app/store/selectors";
import { Checkbox } from "shared/ui/checkbox/Checkbox";
import { Character } from "shared/types/global";

import styles from "./styles.module.scss";

interface CharacterTableRowProps {
  character: Character;
}

const getScoreClassName = (score: number): string => {
  return score === 10 ? styles.highScore : "";
};

export function CharacterTableRow({ character }: CharacterTableRowProps) {
  const chosenCharacters = useAppSelector(selectChosenCharacters);

  const isSelected = chosenCharacters.includes(character);
  const dispatch = useAppDispatch();

  const { Energy, Mobility, Power, Technique, Survivability } =
    getAbilityScores(character);

  return (
    <tr className={`${styles.tableRow} ${isSelected ? styles.selected : ""}`}>
      <td className={styles.characterCell}>
        <div className={styles.characterContent}>
          <Checkbox
            checked={isSelected}
            onChange={() => dispatch(toggleChosenCharacter(character.id))}
            disabled={chosenCharacters.length >= 6 && !isSelected}
          />

          <img
            src={character.thumbnail}
            alt={character.name}
            className={styles.avatar}
          />

          <span className={styles.characterName}>{character.name}</span>
        </div>
      </td>

      <td className={styles.tagsCell}>
        <div className={styles.tagsContainer}>
          {character?.tags?.map((tag) => (
            <PillButton
              key={tag.slot}
              onClick={() => dispatch(toggleFilter(tag.tag_name))}
            >
              {capitalizeFirstLetter(tag.tag_name)}
            </PillButton>
          ))}
        </div>
      </td>

      {[Power, Mobility, Technique, Survivability, Energy].map((score) => (
        <td className={`${styles.scoreCell} ${getScoreClassName(score)}`}>
          {score}
        </td>
      ))}
    </tr>
  );
}
