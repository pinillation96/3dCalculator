import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correctly import thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import printerReducer from './reducers/printerReducer';

const reducer = combineReducers({
  printers: printerReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
