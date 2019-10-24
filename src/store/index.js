import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk);
const store = createStore(
  allReducers,
  composeEnhancers(middlewares)
);

export { store as default };
