import { createAsyncAction, createReducer, ActionType, RootState } from 'typesafe-actions';
import { FetchStatus } from '../../constants';


//  types
export interface Note {
    title: String;
    content: String;
    tags: String[];
    timeStamp: number;
}

export interface GetNoteListParams {
    page: number;
    size?: number;
}

export type listDtoType = Omit<Note, 'content' | 'tags'> & { writer: String };
export interface GetNoteListDto {
    list: listDtoType[];
}

export interface GetNoteParams {
    id: number;
}

export type noteDtoType = Note & {writer: String};
export interface GetNoteDto {
    note: noteDtoType;
}

export interface PostNoteParams extends Note {}

export enum NoteApi {
    getNoteList = 'getNoteList',
    getNote = 'getNote',
    postNote = 'postNote',
}

export interface NoteApiStatus {
    getNoteList: FetchStatus,
    getNote: FetchStatus,
    postNote: FetchStatus,
}

export interface NoteState extends GetNoteListDto, GetNoteDto {
    apiStatus: NoteApiStatus,
}


//  actionTypes
export const GET_NOTE_LIST_REQUEST = 'GET_NOTE_LIST_REQUEST';
export const GET_NOTE_LIST_SUCCESS = 'GET_NOTE_LIST_SUCCESS';
export const GET_NOTE_LIST_FAILURE = 'GET_NOTE_LIST_FAILURE';

export const GET_NOTE_REQUEST = 'GET_NOTE_REQUEST';
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
export const GET_NOTE_FAILURE = 'GET_NOTE_FAILURE';

export const POST_NOTE_REQUEST = 'POST_NOTE_REQUEST';
export const POST_NOTE_SUCCESS = 'POST_NOTE_SUCCESS';
export const POST_NOTE_FAILURE = 'POST_NOTE_FAILURE';

export const PUT_NOTE_REQUEST = 'PUT_NOTE_REQUEST';
export const PUT_NOTE_SUCCESS = 'PUT_NOTE_SUCCESS';
export const PUT_NOTE_FAILURE = 'PUT_NOTE_FAILURE';

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';


//  actionCreators
export const getNoteListRequest = createAsyncAction(
    GET_NOTE_LIST_REQUEST,
    GET_NOTE_LIST_SUCCESS,
    GET_NOTE_LIST_FAILURE,
)<GetNoteListParams, GetNoteListDto, undefined>();

export const getNoteRequest = createAsyncAction(
    GET_NOTE_REQUEST,
    GET_NOTE_SUCCESS,
    GET_NOTE_FAILURE,
)<GetNoteParams, GetNoteDto, undefined>();

export const postNoteRequest = createAsyncAction(
    POST_NOTE_REQUEST,
    POST_NOTE_SUCCESS,
    POST_NOTE_FAILURE,
)<PostNoteParams, undefined, undefined>();

export type GetNoteListAction = ActionType<typeof getNoteListRequest>;
export type GetNoteAction = ActionType<typeof getNoteRequest>;
export type PostNoteAction = ActionType<typeof postNoteRequest>;
export type NoteAction = GetNoteListAction | GetNoteAction | PostNoteAction;


//  reducers
const initialState: NoteState = {
    list: [],
    note: undefined,
    apiStatus: undefined,
};

const noteReducer = createReducer<NoteState, NoteAction>(initialState, {
    [GET_NOTE_LIST_REQUEST]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.getNoteList]: FetchStatus.FETCHING,
        }
    }),
    [GET_NOTE_LIST_SUCCESS]: (state, { payload: { list } }) => ({
        ...state,
        list,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.getNoteList]: FetchStatus.SUCCESS,
        }
    }),
    [GET_NOTE_LIST_FAILURE]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.getNoteList]: FetchStatus.FAILURE,
        }
    }),
    [GET_NOTE_REQUEST]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.getNote]: FetchStatus.FETCHING,
        }
    }),
    [GET_NOTE_SUCCESS]: (state, { payload: { note } }) => ({
        ...state,
        note,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.getNote]: FetchStatus.SUCCESS,
        }
    }),
    [GET_NOTE_FAILURE]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.getNote]: FetchStatus.FAILURE,
        }
    }),
    [POST_NOTE_REQUEST]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.postNote]: FetchStatus.FETCHING,
        }
    }),
    [POST_NOTE_SUCCESS]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.postNote]: FetchStatus.SUCCESS,
        }
    }),
    [POST_NOTE_FAILURE]: state => ({
        ...state,
        apiStatus: {
            ...state.apiStatus,
            [NoteApi.postNote]: FetchStatus.FAILURE,
        }
    }),
});

export default noteReducer;