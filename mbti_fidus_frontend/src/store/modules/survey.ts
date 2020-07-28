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

export enum SurveyAPI {
    getSurveyList = 'getSurveyList',
    postResultList = 'postResultList',
}

export interface ApiStatus {
    [SurveyAPI.getSurveyList]?: FetchStatus;
    [SurveyAPI.postResultList]?: FetchStatus;
}

//  omit 처리할 것
export interface SurveyState extends SurveyList, SurveyResultList {
    type: SurveyType;
    apiStatus: ApiStatus;
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

export const postSurvey = createAsyncAction(
    POST_SURVEY_REQUEST,
    POST_SURVEY_SUCCESS,
    POST_SURVEY_FAILURE,
)<SurveyResultList, undefined, undefined>();


type GetSurveyListAction = ActionType<typeof getSurveyList>
type PostSurveyAction = ActionType<typeof postSurvey>
export type SurveyAction = GetSurveyListAction | PostSurveyAction;


//  reducers
const initialState: SurveyState = {
    list: [],
    resultList: [],
    apiStatus: {},
    type: undefined,
};

const surveyReducer = createReducer<SurveyState, SurveyAction>(initialState, {
    [GET_SURVEYLIST_REQUEST]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.getSurveyList]: FetchStatus.FETCHING,
        }
    }),
    [GET_SURVEYLIST_SUCCESS]: (state, { payload: { list }}) => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.getSurveyList]: FetchStatus.SUCCESS,
        },
        listg: [ ...state.list, ...list ],
    }),
    [GET_SURVEYLIST_FAILURE]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.getSurveyList]: FetchStatus.FAILURE,
        },
    }),
    [POST_SURVEY_REQUEST]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.postResultList]: FetchStatus.FETCHING,
        }
    }),
    [POST_SURVEY_SUCCESS]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.postResultList]: FetchStatus.SUCCESS,
        },
    }),
    [POST_SURVEY_FAILURE]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.postResultList]: FetchStatus.FAILURE,
        },
    }),
});

export default surveyReducer;

//  selectors

