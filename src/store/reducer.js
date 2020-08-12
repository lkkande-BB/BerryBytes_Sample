import { combineReducers  } from 'redux';

import SignUp from './auth/reducer';
import BarChart from './barchartdata/reducer'

const rootReducer = combineReducers({
    SignUp,
    BarChart
});

export default rootReducer;