import * as EventActions from '../actions';
/* Defined Constants */
import { wait } from '../config/const';

export const eventRequest = () => {
  return async (dispatch, getState) => {
    const state = getState(); // getState() normally without immutable
    const eventForm = state.get('eventReducer').get('eventForm');
    console.log('eventRequest', eventForm);
    try {
      dispatch(EventActions.fetchingEventRequest());
      await wait(3000);
      dispatch(EventActions.fetchingEventSuccess(eventForm));
    } catch (error) {
      dispatch(EventActions.fetchingEventFailure(error.message));
    }
  };
};

export const eventFormChange = eventForm => {
  return async (dispatch, getState) => {
    // const state = getState().get('loginReducer'); // getState() normally without immutable
    try {
      dispatch(EventActions.setEventFormChange(eventForm));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const eventFieldError = error => {
  return async (dispatch, getState) => {
    // const state = getState().get('loginReducer'); // getState() normally without immutable
    try {
      dispatch(EventActions.setEventFieldError(error));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const eventActiveModal = () => {
  return async (dispatch) => {
    try {
      dispatch(EventActions.setEventActiveModal());
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const remindersListActiveModal = () => {
  return async (dispatch) => {
    try {
      dispatch(EventActions.setRemindersListActiveModal());
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const reminderSelectedChange = reminderSelected => {
  return async (dispatch) => {
    console.log('reminderSelectedChange', reminderSelected);
    try {
      dispatch(EventActions.setReminderSelectedChange(reminderSelected));
    } catch (error) {
      console.log(error.message);
    }
  };
};
