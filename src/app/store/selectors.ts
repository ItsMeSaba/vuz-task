import type { Character } from "@/shared/types/global";
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

const selectQuery = (s: RootState) => s.characters.query.trim().toLowerCase();
const selectFilters = (s: RootState) => s.characters.filters;

export const selectChosenCharacters = (s: RootState) =>
  s.characters.chosenCharacters;

export const selectCharacters = (s: RootState) => s.characters.data;

export const selectFilteredCharacters = createSelector(
  [selectCharacters, selectQuery, selectFilters, selectChosenCharacters],
  (characters, query, filters, chosenCharacters) => {
    return characters.filter(
      (character) =>
        matchesQuery(query, character) &&
        matchesFilters(filters, character, chosenCharacters)
    );
  }
);

function matchesQuery(query: string, character: Character) {
  if (!query) return true;
  const _query = query.trim().toLowerCase();

  const matchesName = character.name.toLowerCase().includes(_query);

  const matchesTag = character.tags?.some((tag) =>
    tag.tag_name.toLowerCase().includes(_query)
  );

  return matchesName || matchesTag;
}

function matchesFilters(
  filters: string[],
  character: Character,
  chosenCharacters: Character[]
) {
  if (!filters.length) return true;

  const matchesTeamFilter =
    filters.includes("My Team") &&
    chosenCharacters.some(
      (chosenCharacter) => character.id === chosenCharacter.id
    );

  const matchesTagsFilter = filters.every((filter) =>
    character?.tags?.some((tag) => filter === tag.tag_name)
  );

  return matchesTagsFilter || matchesTeamFilter;
}
