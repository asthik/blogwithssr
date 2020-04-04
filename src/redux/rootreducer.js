import { combineReducers } from 'redux';
import userreducer from './user/userreducer';

export default combineReducers({
    user: userreducer
})