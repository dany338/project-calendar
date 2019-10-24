import * as CalendarActions from '../actions';

export const currentDateChange = (name, value) => {
  return async (dispatch, getState) => {
    const state = getState(); // getState() normally without immutable
    const month = state.get('calendarReducer').get('month');
    if( value === '<' || value === '>' ) { value = (value === '>') ? month + 1 : month - 1; }
    try {
      dispatch(CalendarActions.setCurrentDateChange(name, value));
    } catch (error) {
      console.log(error.message);
    }
  };
};
