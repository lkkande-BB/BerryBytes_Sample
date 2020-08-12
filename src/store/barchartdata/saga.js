import { takeEvery, fork, put, all, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { GET_BARCHART_DATA, GET_BARCHART_DATA_SUCCESS } from './actions'

function getBarChartDataCall(payload) {
    return axios.get("https://api.mockaroo.com/api/a87749f0?count=" + payload.data.count + "&key=4cdfa2b0", null)
}

function* getBarChartData(payload) {
    try {
        const response = yield call(getBarChartDataCall, payload);
        const data = response.data;
        if (data) {
            yield put({ type: GET_BARCHART_DATA_SUCCESS, data })
            yield delay(5000)
            yield call(getBarChartData, payload);
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