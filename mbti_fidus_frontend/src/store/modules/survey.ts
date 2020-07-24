import { createAsyncAction, createReducer, ActionType } from 'typesafe-actions';
import { FetchStatus } from '../../constants';

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

export interface SurveyResult {
    text: string,
    value: number,
}

export interface SurveyResultList {
    resultList: SurveyResult[];
}


//  omit 처리할 것
export interface SurveyState extends SurveyList, SurveyResultList {
    type: SurveyType;
    status: FetchStatus;
}

//  actionTypes
export const GET_SURVEYLIST_REQUEST = 'GET_SURVEYLIST_REQUEST';
export const GET_SURVEYLIST_SUCCESS = 'GET_SURVEYLIST_SUCCESS';
export const GET_SURVEYLIST_FAILURE = 'GET_SURVEYLIST_FAILURE';

export const POST_SURVEY_REQUEST = 'POST_SURVEY_REQUEST';
export const POST_SURVEY_SUCCESS = 'POST_SURVEY_SUCCESS';
export const POST_SURVEY_FAILURE = 'POST_SURVEY_FAILURE';

type Types =
    typeof GET_SURVEYLIST_REQUEST | typeof GET_SURVEYLIST_SUCCESS | typeof GET_SURVEYLIST_FAILURE |
    typeof POST_SURVEY_REQUEST | typeof POST_SURVEY_SUCCESS | typeof POST_SURVEY_FAILURE

    
//  actionCreators
export const getSurveyList = createAsyncAction(
    GET_SURVEYLIST_REQUEST,
    GET_SURVEYLIST_SUCCESS,
    GET_SURVEYLIST_FAILURE,
)<SurveyListParams, SurveyList, undefined>();

export const postSurvey = createAsyncAction(
    POST_SURVEY_REQUEST,
    POST_SURVEY_SUCCESS,
    POST_SURVEY_FAILURE,
)<SurveyResultList, undefined, undefined>();


type GetSurveyListAction = ActionType<typeof getSurveyList>
export type Action = GetSurveyListAction;

//  reducers
const initialState: SurveyState = {
    list: [],
    resultList: [],
    status: FetchStatus.UNKNOWN,
    type: undefined,
};

const surveyReducer = createReducer<SurveyState, Action>(initialState, {
    [GET_SURVEYLIST_REQUEST]: state => ({
        ...state,
        status: FetchStatus.FETCHING,
    }),
    [GET_SURVEYLIST_SUCCESS]: (state, { payload: { list }}) => ({
        ...state,
        status: FetchStatus.SUCCESS,
        list: [ ...state.list, ...list ],
    }),
    [GET_SURVEYLIST_FAILURE]: state => ({
        ...state,
        status: FetchStatus.FAILURE,
    }),
});

export default surveyReducer;

//  selectors


