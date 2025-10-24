import { Character } from "@/shared/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import charactersJson from "shared/data/characters.json";

const initialState = {
  data: charactersJson as Character[],
  query: "",
  filters: [] as string[],
  chosenCharacters: [] as Character[],
};

const characters = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    toggleFilter: (state, action: PayloadAction<string>) => {
      const index = state.filters.indexOf(action.payload);
      index === -1
        ? state.filters.push(action.payload)
        : state.filters.splice(index, 1);
    },
    clearFilters: (state) => {
      state.filters = [];
    },
    clearQuery: (state) => {
      state.query = "";
    },
    toggleChosenCharacter: (state, action: PayloadAction<Character>) => {
      const index = state.chosenCharacters.findIndex(
        (character) => character.id === action.payload.id
      );

      if (index !== -1) {
        state.chosenCharacters.splice(index, 1);
      } else if (state.chosenCharacters.length < 6) {
        state.chosenCharacters.push(action.payload);
      }
    },
  },
});

export const {
  setQuery,
  clearQuery,
  clearFilters,
  toggleFilter,
  setData,
  toggleChosenCharacter,
} = characters.actions;
export default characters.reducer;
