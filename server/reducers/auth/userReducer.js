import {
    userTypes
} from '../../types';
const {
    USER_LOGIN,
    USER_SIGNUP,
    USER_LOGOUT
} = userTypes;


const initialState = {
    userdata: {
        data: {
            token: null,
            status: 'A24',
            error: 'not logged in',
            isLoggedIn: false
        },
    }
}
const findError = (payload) => {
    if (payload.error) {
        return {
            data: {
                token: null,
                status: payload.status,
                error: payload.error,
                isLoggedIn: false
            },

        }
    } else {
        return {
            data: {
                status: payload.status,
                token: payload.data.token,
                message: payload.message,
                isLoggedIn: true
            },
        }
    }
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userdata: findError(action.payload)
            }
        case USER_SIGNUP:
            return {
                    ...state,
                    userdata: action.payload
                }
        default:
            return state
    }
}

export default userReducer;