import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../modules/Add_details/addUserSlice';
import coinsReducer from '../modules/crypro/coinsSlice';
import logger from 'redux-logger';
// import {getDefaultMiddleware} from '@reduxjs/toolkit';

const getMiddleWare = (
  getDefaultMiddleware: (arg0: {serializableCheck: boolean}) => any[],
) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger);

export const store = configureStore({
  reducer: {
    userData: userReducer,
    coinsData: coinsReducer,
  },
  middleware: getMiddleWare,
});

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
