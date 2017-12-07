// dependencies
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

// local dependencies
import reducers from './Reducers';

export default createStore(
  reducers,
  applyMiddleware(thunk, logger)
);