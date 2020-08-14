import { combineReducers } from 'redux';
import surveyReducer from './survey';
import noteReducer from './note';

const rootReducer = combineReducers({
    surveyReducer,
    noteReducer,
});

export default rootReducer;
