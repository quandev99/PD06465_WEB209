import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { productApi, productReducer } from "../api/productApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
