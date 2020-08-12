import { all } from 'redux-saga/effects'
import barchartdataSaga from './barchartdata/saga';

export default function* rootSaga() {
    yield all([
        barchartdataSaga(),
    ])
}