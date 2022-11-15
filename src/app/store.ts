import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import common from './redux/common';


export const store = configureStore({
  reducer: {common
   
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
