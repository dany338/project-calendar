import { fromJS } from 'immutable';
import * as EventActions from '../typesActions';

const INITIAL_STATE = fromJS({
  eventForm: {
    city: '',
    date: '',
    time: '',
  },
  loading: false,
  error: '',
  data: {},
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
        .set('data', data);
    }

    case EventActions.FETCHING_EVENT_FAILURE: {
      const { data } = payload;
      return state
        .set('loading', false)
        .set('data', data);
    }

    case EventActions.SET_EVENT_FORM_CHANGE: {
      const { name, value } = payload;
      const eventForm = (typeof state.get('eventForm').city === 'undefined') ? state.get('eventForm').toJS() : state.get('eventForm');
      console.log('SET_EVENT_FORM_CHANGE', eventForm);
      return state
        .set('eventForm', { ...eventForm, [name]: value });
    }

    case EventActions.SET_EVENT_FIELD_ERROR: {
      const { error } = payload;
      return state
        .set('error', error);
    }

    default: {
      return state;
    }
  }
};

export default eventReducer;
