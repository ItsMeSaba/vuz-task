import { ChosenCharacters } from "features/chosen-characters/ui";
import { CharactersList } from "features/characters-list/ui";
import { Filters } from "features/filters/ui/Filters";
import { Search } from "features/search/ui/Search";

export function Homepage() {
  return (
    <div>
      <ChosenCharacters />
      <Search />
      <Filters />
      <CharactersList />
    </div>
  );
}
