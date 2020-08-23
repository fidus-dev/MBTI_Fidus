import { all, takeEvery, takeLeading, takeLatest } from 'redux-saga/effects';
import surveySaga from './surveySaga';
import {} from '../modules/survey';

export default function* rootSaga() {
    yield all([
        takeEvery('',surveySaga),
    ]);
}