import { fromJS } from 'immutable';
import * as EventActions from '../typesActions';

const INITIAL_STATE = fromJS({
  eventForm: {
    title: '',
    city: '',
    date: '',
    time: '',
    description: '',
  },
  loading: false,
  error: '',
  data: [],
  active: false,
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
        .set('data', [...state.get('data').toArray(), data]);
    }

    case EventActions.FETCHING_EVENT_FAILURE: {
      const { error } = payload;
      return state
        .set('loading', false)
        .set('error', error);
    }

    case EventActions.SET_EVENT_FORM_CHANGE: {
      const { name, value } = payload;
      const eventForm = {...state.get('eventForm').toJS()};
      console.log('SET_EVENT_FORM_CHANGE', eventForm);
      return state
        .set('eventForm', { ...eventForm, [name]: value });
    }

    case EventActions.SET_EVENT_FIELD_ERROR: {
      const { error } = payload;
      return state
        .set('error', error);
    }

    case EventActions.SET_EVENT_ACTIVE_MODAL: {
      console.log('SET_EVENT_ACTIVE_MODAL reducer',!state.get('active'));
      return state
        .set('active', !state.get('active'));
    }

    default: {
      return state;
    }
  }
};

export default eventReducer;
