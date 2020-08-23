import { createAsyncAction, createReducer, ActionType, RootState } from 'typesafe-actions';
import { createSelector } from 'reselect';
import { FetchStatus } from '../../constants';

//  types
export enum SurveyType {
    PERSONALITY = 'PERSONALITY',
    DATING = 'DATING',
}

export interface GetSurveyListParams {
    type: SurveyType;
    page?: number;
    size?: number;
}

export interface Survey {
    text: string;
    range: number;
}

export interface SurveyList {
    surveyList: Survey[];
}

export interface Result {
    value: number,
}

export interface ResultList {
    resultList: Result[];
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
export interface SurveyState extends SurveyList, ResultList {
    type: SurveyType;
    apiStatus: ApiStatus;
}


//  actionTypes
export const GET_SURVEYLIST_REQUEST = 'GET_SURVEYLIST_REQUEST';
export const GET_SURVEYLIST_SUCCESS = 'GET_SURVEYLIST_SUCCESS';
export const GET_SURVEYLIST_FAILURE = 'GET_SURVEYLIST_FAILURE';

export const POST_RESULTLIST_REQUEST = 'POST_RESULTLIST_REQUEST';
export const POST_RESULTLIST_SUCCESS = 'POST_RESULTLIST_SUCCESS';
export const POST_RESULTLIST_FAILURE = 'POST_RESULTLIST_FAILURE';


//  actionCreators
export const getSurveyList = createAsyncAction(
    GET_SURVEYLIST_REQUEST,
    GET_SURVEYLIST_SUCCESS,
    GET_SURVEYLIST_FAILURE,
)<GetSurveyListParams, SurveyList, undefined>();

export const postResultList = createAsyncAction(
    POST_RESULTLIST_REQUEST,
    POST_RESULTLIST_SUCCESS,
    POST_RESULTLIST_FAILURE,
)<ResultList, undefined, undefined>();


type GetSurveyListAction = ActionType<typeof getSurveyList>
type PostResultListAction = ActionType<typeof postResultList>
export type SurveyAction = GetSurveyListAction | PostResultListAction;


//  reducers
const initialState: SurveyState = {
    surveyList: [],
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
    [GET_SURVEYLIST_SUCCESS]: (state, { payload: { surveyList }}) => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.getSurveyList]: FetchStatus.SUCCESS,
        },
        listg: [ ...state.surveyList, ...surveyList ],
    }),
    [GET_SURVEYLIST_FAILURE]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.getSurveyList]: FetchStatus.FAILURE,
        },
    }),
    [POST_RESULTLIST_REQUEST]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.postResultList]: FetchStatus.FETCHING,
        }
    }),
    [POST_RESULTLIST_SUCCESS]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.postResultList]: FetchStatus.SUCCESS,
        },
    }),
    [POST_RESULTLIST_FAILURE]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [SurveyAPI.postResultList]: FetchStatus.FAILURE,
        },
    }),
});

export default surveyReducer;

//  selectors

export const selectSurveyList = (state: RootState) => state.surveyReducer.surveyList;
export const selectApiStatus = (state: RootState) => state.surveyReducer.apiStatus;
export const selectType = (state: RootState) => state.surveyReducer.type;