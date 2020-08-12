import { GET_BARCHART_DATA_SUCCESS } from './actions';

const initialState = {
    barChartDetails: []
}

const BarChart = (state = initialState, action) => {
    switch (action.type) {
        case GET_BARCHART_DATA_SUCCESS:
            state = {
                ...state,
                barChartDetails : [...state.barChartDetails, ...action.data]
            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default BarChart;