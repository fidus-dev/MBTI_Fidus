import { createAsyncAction, createReducer } from 'typesafe-actions';

//  types
export enum SurveyFilter {
    default = 'default',
};

export enum SurveyType {
    PERSONALITY = 'PERSONALITY',
    DATING = 'DATING',
}

export interface SurveyListParams {
    type: SurveyType;
    page?: number;
    size?: number;
    filter?: SurveyFilter;
}

export interface Survey {
    text: string;
    range: number;
}

export interface SurveyList {
    list: Survey[];
}

export interface SurveyState extends SurveyList {
    result: number[];
}


//  actionTypes
export const GET_SURVEYLIST_REQUEST = 'GET_SURVEYLIST_REQUEST';
export const GET_SURVEYLIST_SUCCESS = 'GET_SURVEYLIST_SUCCESS';
export const GET_SURVEYLIST_FAILURE = 'GET_SURVEYLIST_FAILURE';

export const POST_SURVEY_REQUEST = 'POST_SURVEY_REQUEST';
export const POST_SURVEY_SUCCESS = 'POST_SURVEY_SUCCESS';
export const POST_SURVEY_FAILURE = 'POST_SURVEY_FAILURE';


//  actionCreators
export const getSurveyList = createAsyncAction(
    GET_SURVEYLIST_REQUEST,
    GET_SURVEYLIST_SUCCESS,
    GET_SURVEYLIST_FAILURE,
)<SurveyListParams, SurveyList, undefined>();


//  reducers
const initialState: SurveyState = {
    list: [],
    result: [],
};

const surveyReducer = createReducer<any, any>(initialState, {
    
});

export default surveyReducer;

//  selectors


