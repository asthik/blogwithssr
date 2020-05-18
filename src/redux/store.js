import { createStore, applyMiddleware } from 'redux';
//redux-logger
import logger from 'redux-logger';
import rootreducer from './rootreducer';
const middlewares = [logger];
const store = createStore(rootreducer, window.INITIAL_STATE, applyMiddleware(...middlewares));

export default store;