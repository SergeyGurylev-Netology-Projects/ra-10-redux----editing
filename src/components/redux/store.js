import { combineReducers, compose, legacy_createStore } from 'redux';
import addReducer from './addReducer.js';
import listReducer from './listReducer.js';
import filterReducer from './filterReducer.js';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      add: addReducer,
      list: listReducer,
      filter: filterReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
