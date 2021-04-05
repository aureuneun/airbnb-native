import { combineReducers } from 'redux';
import userReducer from './userSlice';
import roomReducer from './roomSlice';

const rootReducer = combineReducers({
  userReducer,
  roomReducer,
});

export default rootReducer;
