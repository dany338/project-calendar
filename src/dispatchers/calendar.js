import * as CalendarActions from '../actions';
/* Defined Constants */
import { dayInitialNextMonth } from '../config/const';

export const currentDateChange = (direction) => {
  return async (dispatch, getState) => {
    const state = getState(); // getState() normally without immutable
    const currentDate = (typeof state.get('calendarReducer').get('currentDate').dayWeek === 'undefined') ? state.get('calendarReducer').get('currentDate').toJS() : state.get('calendarReducer').get('currentDate');
    // console.log('mapStateToProps currentDateChange 1:', currentDate);
    const { month, year } = currentDate;
    let newYear = year;
    let newMonth = month;
    let newDayMonth = dayInitialNextMonth;
    try {
      if (month === 0 && direction === '<') {
        newMonth = 11;
        newYear = year - 1;
      } else if (month === 11 && direction === '>') {
        newMonth = 0;
        newYear = year + 1;
      } else {
        newMonth = (direction === '>') ? month + 1 : month - 1;
      }
      const newDate = new Date(newYear, newMonth, newDayMonth);
      const newCurrentDate = {
        dayWeek: newDate.getDay(),
        dayMonth: newDayMonth,
        month: newMonth,
        year: newYear,
        date: newDate,
      };
      // console.log('currentDateChange currentDate 2:', newCurrentDate);
      dispatch(CalendarActions.setCurrentDateChange(newCurrentDate));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const currentDateKeyChange = (name, value) => {
  return async (dispatch, getState) => {
    const state = getState(); // getState() normally without immutable
    const currentDate = state.get('calendarReducer').get('currentDate');
    console.log('currentDateKeyChange currentDate', currentDate);
    try {
      dispatch(CalendarActions.setCurrentDateKeyChange(name, value));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const dateSelectedChange = dateSelected => {
  return async (dispatch) => {
    console.log('dateSelectedChange', dateSelected);
    try {
      dispatch(CalendarActions.setDateSelectedChange(dateSelected));
    } catch (error) {
      console.log(error.message);
    }
  };
};
