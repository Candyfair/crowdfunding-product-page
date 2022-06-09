import { combineReducers } from 'redux';
import bookmark from './bookmark';
import modals from './modals';

export default combineReducers({
  bookmark,
  modals,
});
