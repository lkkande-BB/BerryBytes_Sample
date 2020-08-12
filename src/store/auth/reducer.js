import { SIGNUP } from './actions';

const initialState = {
    userDetails: null
}

const SignUp = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            state = {
                ...state,
                userDetails: action.data.payload
            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default SignUp;