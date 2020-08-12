import { takeEvery, fork, put, all, call, delay } from 'redux-saga/effects';
import { GET_BARCHART_DATA, GET_BARCHART_DATA_SUCCESS } from './actions'

function getBarChartDataCall() {
    return false; //call to api for getting data and return response
}

function* getBarChartData() {
    try {
        const response = getBarChartDataCall();
        const data = response.data;
        if (data) {
            yield put({ type: GET_BARCHART_DATA_SUCCESS, data })
            yield delay(3000)
            yield call(getBarChartData)
        } else {
    
        }
    } catch (error) {
    
    }
}

export function* watchBarChart() {
    yield takeEvery(GET_BARCHART_DATA, getBarChartData)
}

function* barchartdataSaga() {
    yield all([fork(watchBarChart)]);
}

export default barchartdataSaga;