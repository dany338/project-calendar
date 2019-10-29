import * as CalendarActions from '../typesActions';

export const setCurrentDateChange = currentDate => {
  return {
    type: CalendarActions.SET_CURRENT_DATE_CHANGE,
    payload: { currentDate },
  };
};

export const setCurrentDateKeyChange = (name, value) => {
  return {
    type: CalendarActions.SET_CURRENT_DATE_KEY_CHANGE,
    payload: { name, value },
  };
};

export const setDateSelectedChange = dateSelected => {
  return {
    type: CalendarActions.SET_DATE_SELECTED_CHANGE,
    payload: { dateSelected },
  };
};
