import { toggleChosenCharacterLocalStorage } from "shared/utils/chosen-characters-localstorage";
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

  const handleCheckboxChange = (characterId: number) => {
    dispatch(toggleChosenCharacter(characterId));

    toggleChosenCharacterLocalStorage(characterId);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your champions!</h2>

      <div className={styles.avatarsContainer}>
        {chosenCharacters.map((character) => (
          <CharacterAvatar
            key={character.id}
            character={character}
            onRemove={() => handleCheckboxChange(character.id)}
          />
        ))}
      </div>

      <Stats stats={averageStats} />
    </div>
  );
}
