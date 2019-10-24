import { fromJS } from 'immutable';
import * as CalendarActions from '../typesActions';

const INITIAL_STATE = fromJS({
  currentDate: {
    month: '',
    date: '',
  },
});

const calendarReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CalendarActions.SET_CURRENT_DATE_CHANGE: {
      const { name, value } = payload;
      const currentDate = (typeof state.get('currentDate').month === 'undefined') ? state.get('currentDate').toJS() : state.get('currentDate');
      console.log('SET_CURRENT_DATE_CHANGE', currentDate);
      return state
        .set('currentDate', { ...currentDate, [name]: value });
    }

    default: {
      return state;
    }
  }
};

export default calendarReducer;
