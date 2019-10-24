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

export const eventFormChange = (name, value) => {
  return async (dispatch, getState) => {
    // const state = getState().get('loginReducer'); // getState() normally without immutable
    try {
      dispatch(EventActions.setEventFormChange(name, value));
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
