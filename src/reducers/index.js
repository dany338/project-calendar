import { combineReducers } from 'redux-immutable';

import calendarReducer from './calendar';
import eventReducer from './event';

const allReducers = combineReducers({
  calendarReducer,
  eventReducer,
});

export default allReducers;
