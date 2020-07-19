import { combineReducers } from 'redux';
import surveyReducer from './surveyReducer';

const rootReducer = combineReducers({
    surveyReducer,
});

export default rootReducer;