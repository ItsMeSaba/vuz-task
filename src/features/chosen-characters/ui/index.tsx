import { calculateAverageStats } from "../helpers/calculate-average-stats";
import { toggleChosenCharacter } from "app/store/slices/characters.slice";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { selectChosenCharacters } from "app/store/selectors";
import { CharacterAvatar } from "./CharacterAvatar";
import { Stats } from "./Stats";

import styles from "./styles.module.scss";

export function ChosenCharacters() {
  const chosenCharacters = useAppSelector(selectChosenCharacters);
  const averageStats = calculateAverageStats(chosenCharacters);
  const dispatch = useAppDispatch();

  if (chosenCharacters.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your champions!</h2>

      <div className={styles.avatarsContainer}>
        {chosenCharacters.map((character) => (
          <CharacterAvatar
            key={character.id}
            character={character}
            onRemove={() => dispatch(toggleChosenCharacter(character))}
          />
        ))}
      </div>

      <Stats stats={averageStats} />
    </div>
  );
}
