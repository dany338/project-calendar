import { fromJS } from 'immutable';
import * as EventActions from '../typesActions';

/* Defined Constants */
const now = new Date();

const INITIAL_STATE = fromJS({
  eventForm: {
    id: '',
    title: '',
    city: '',
    dateReminder: now,
    time: '',
    color: '',
  },
  loading: false,
  error: '',
  data: [],
  active: false,
  activeList: false,
  reminderSelected: '',
});

const eventReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EventActions.FETCHING_EVENT_REQUEST: {
      return state
        .set('loading', true);
    }

    case EventActions.FETCHING_EVENT_SUCCESS: {
      const { data } = payload;
      return state
        .set('loading', false)
        .set('error', '')
        .set('data', [...state.get('data'), data]);
    }

    case EventActions.FETCHING_EVENT_FAILURE: {
      const { error } = payload;
      return state
        .set('loading', false)
        .set('error', error);
    }

    case EventActions.SET_EVENT_FORM_CHANGE: {
      const { eventForm } = payload;
      return state
        .set('eventForm', eventForm)
        .set('data', [...state.get('data'), eventForm]);
    }

    case EventActions.SET_EVENT_FIELD_ERROR: {
      const { error } = payload;
      return state
        .set('error', error);
    }

    case EventActions.SET_EVENT_ACTIVE_MODAL: {
      return state
        .set('active', !state.get('active'));
    }

    case EventActions.SET_REMINDER_ACTIVE_MODAL: {
      return state
        .set('activeList', !state.get('activeList'));
    }

    case EventActions.SET_REMINDER_SELECTED_CHANGE: {
      const { reminderSelected } = payload;
      return state
        .set('reminderSelected', reminderSelected);
    }

    default: {
      return state;
    }
  }
};

export default eventReducer;
