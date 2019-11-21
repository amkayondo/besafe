import { userTypes } from '../../types';
import { SERVER_URL } from '../../constants'
const { USER_LOGIN } = userTypes;

import { CheckForError } from '../../../src/helpers';


const loginAction = (userdata) => dispatch => {
    fetch(`${SERVER_URL}/auth/signin`,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(userdata)
    })
    .then(res => res.json())
    .then(data =>(
        dispatch({
        type: USER_LOGIN,
        // eddie no need for a JSON.parse(data)
        payload: data
    })))
}

export {
    loginAction
};
