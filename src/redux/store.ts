import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import itensReducer from "./modules/itens/reducer";

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    itensState: itensReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;