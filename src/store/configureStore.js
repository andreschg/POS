import { createStore, combineReducers } from 'redux';
import menuReducer from './reducers/menuReducer';
import usersReducer from './reducers/usersReducer';

const store = createStore(combineReducers(
  {
    menu: menuReducer,
    users: usersReducer
  }
));

export default store;