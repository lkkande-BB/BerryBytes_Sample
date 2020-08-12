export const SIGNUP = 'signup';
export const SIGNUP_SUCCESSFUL = 'signup_successful';

const signUp = (payload) => ({
    type: SIGNUP,
    data: { payload }
})

export {
    signUp
}