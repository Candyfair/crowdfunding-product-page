import { combineReducers } from 'redux';
import bookmark from './bookmark';
import modals from './modals';
import pledge from './pledge';
import counters from './counters';

export default combineReducers({
  bookmark,
  modals,
  pledge,
  counters,
});
