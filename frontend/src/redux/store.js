import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import printerReducer from './reducers/printerReducer';
import materialReducer from './reducers/materialReducer';

const reducer = combineReducers({
  printers: printerReducer,
  materials: materialReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
