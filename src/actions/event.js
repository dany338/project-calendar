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

export const fetchingEventFailure = error => {
  return {
    type: EventActions.FETCHING_EVENT_FAILURE,
    payload: { error },
  };
};

export const setEventFormChange = eventForm => {
  return {
    type: EventActions.SET_EVENT_FORM_CHANGE,
    payload: { eventForm },
  };
};

export const setEventFieldError = error => {
  return {
    type: EventActions.SET_EVENT_FIELD_ERROR,
    payload: { error },
  };
};

export const setEventActiveModal = () => {
  return {
    type: EventActions.SET_EVENT_ACTIVE_MODAL,
  };
};

export const setRemindersListActiveModal = () => {
  return {
    type: EventActions.SET_REMINDER_ACTIVE_MODAL,
  };
};

export const setReminderSelectedChange = reminderSelected => {
  return {
    type: EventActions.SET_REMINDER_SELECTED_CHANGE,
    payload: { reminderSelected },
  };
};
