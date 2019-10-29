import { fromJS } from 'immutable';
import * as CalendarActions from '../typesActions';
import dayjs from 'dayjs';

/* Defined Constants */
const now = new Date();

const INITIAL_STATE = fromJS({
  currentDate: {
    dayWeek: now.getDay(),
    dayMonth: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
    dateNow: now,
  },
  dateSelected: now,
});

const calendarReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CalendarActions.SET_CURRENT_DATE_CHANGE: {
      const { currentDate } = payload;
      console.log('SET_CURRENT_DATE_CHANGE', currentDate);
      return state
        .set('currentDate', currentDate);
    }

    case CalendarActions.SET_CURRENT_DATE_KEY_CHANGE: {
      const { name, value } = payload;
      const currentDate = {...state.get('currentDate').toJS()};
      console.log('SET_CURRENT_DATE_KEY_CHANGE', currentDate);
      return state
        .set('currentDate', { ...currentDate, [name]: value });
    }

    case CalendarActions.SET_DATE_SELECTED_CHANGE: {
      const { dateSelected } = payload;
      console.log('SET_DATE_SELECTED_CHANGE', dateSelected);
      return state
        .set('dateSelected', dateSelected);
    }

    default: {
      return state;
    }
  }
};

export default calendarReducer;
