import { selectFilteredCharacters } from "app/store/selectors";
import { CharactersTable } from "./CharactersTable";
import { useAppSelector } from "app/store/hooks";
import styles from "./styles.module.scss";

export function CharactersList() {
  const characters = useAppSelector(selectFilteredCharacters);

  return (
    <section className={styles.container}>
      <CharactersTable characters={characters} />
    </section>
  );
}
