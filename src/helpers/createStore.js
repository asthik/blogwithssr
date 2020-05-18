import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootreducer from './../redux/rootreducer';

export default () => {
    const store = createStore(rootreducer, {}, applyMiddleware(logger));
    return store;
}