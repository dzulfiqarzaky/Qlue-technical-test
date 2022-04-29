import { combineReducers } from 'redux';
import  fetchProfileReducer from './profileReducer';

const reducers = combineReducers({
    profile: fetchProfileReducer
});

export default reducers;
