import * as EventActions from '../typesActions';

export const fetchingEventRequest = () => {
  return {
    type: EventActions.FETCHING_EVENT_REQUEST,
  };
};

export const fetchingEventSuccess = data => {
  return {
    type: EventActions.FETCHING_EVENT_SUCCESS,
    payload: { data },
  };
};

export const fetchingEventFailure = data => {
  return {
    type: EventActions.FETCHING_EVENT_FAILURE,
    payload: { data },
  };
};

export const setEventFormChange = (name, value) => {
  return {
    type: EventActions.SET_EVENT_FORM_CHANGE,
    payload: { name, value },
  };
};

export const setEventFieldError = error => {
  return {
    type: EventActions.SET_EVENT_FIELD_ERROR,
    payload: { error },
  };
};
