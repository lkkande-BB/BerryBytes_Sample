export const GET_BARCHART_DATA = 'GET_BARCHART_DATA';
export const GET_BARCHART_DATA_SUCCESS = 'GET_BARCHART_DATA_SUCCESS';

const getBarChartData = (count) => ({
    type: GET_BARCHART_DATA,
    data: { count }
})

export {
    getBarChartData
}