import * as CalendarActions from '../typesActions';

export const setCurrentDateChange = (name, value) => {
  return {
    type: CalendarActions.SET_CURRENT_DATE_CHANGE,
    payload: { name, value },
  };
};
