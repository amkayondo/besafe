import { SERVER_URL } from '../../constants';
import { userTypes } from '../../types'
const { USER_SIGNUP } = userTypes;


const signUpAction = (userdata) => dispatch => {
    fetch(`${SERVER_URL}/auth/signup`,
    {
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(userdata)
    }
    )
    .then(res => res.json())
    .then(data => dispatch({
        type: USER_SIGNUP,
        payload: data
    }))
    .catch(err => console.log(err))
}

export default signUpAction;
