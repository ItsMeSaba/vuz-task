import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleInArray } from "shared/utils/toggle-in-array";
import { Character } from "shared/types/global";

type CharactersState = {
  data: Character[];
  query: string;
  filters: string[];
  chosenCharacters: number[];
};

const MAX_CHOSEN = 6;

const initialState: CharactersState = {
  data: [],
  query: "",
  filters: [],
  chosenCharacters: [],
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
    clearQuery: (state) => {
      state.query = "";
    },

    toggleFilter: (state, action: PayloadAction<string>) => {
      toggleInArray(state.filters, action.payload);
    },
    setFilters: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload.slice();
    },
    clearFilters: (state) => {
      state.filters = [];
    },

    toggleChosenCharacter: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.chosenCharacters.indexOf(id);

      if (index !== -1) {
        state.chosenCharacters.splice(index, 1);
      } else if (state.chosenCharacters.length < MAX_CHOSEN) {
        state.chosenCharacters.push(id);
      }
    },
    clearChosen: (state) => {
      state.chosenCharacters = [];
    },
  },
});

export const {
  setData,
  setQuery,
  clearQuery,
  toggleFilter,
  setFilters,
  clearFilters,
  toggleChosenCharacter,
  clearChosen,
} = characters.actions;

export default characters.reducer;
