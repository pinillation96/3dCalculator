import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import printerReducer from './reducers/printerReducer.js';

const reducer = {
  printers: printerReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
