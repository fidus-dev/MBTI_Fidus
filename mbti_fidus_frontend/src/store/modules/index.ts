import { combineReducers } from 'redux';
import surveyReducer from './survey';

const rootReducer = combineReducers({
    surveyReducer,
});

export default rootReducer;
