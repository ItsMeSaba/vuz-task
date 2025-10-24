import characters from "./slices/characters.slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    characters,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
