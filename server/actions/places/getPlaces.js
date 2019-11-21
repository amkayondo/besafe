import { placeTypes, userTypes } from '../../types';
import { SERVER_URL } from '../../constants'
const { GET_ALL_PLACES } = placeTypes;


const getPlacesAction = (userToken) => dispatch => {
    fetch(`${SERVER_URL}/places`, {
        method: 'GET',
        headers:{
            'content-type': 'application/json',
            'Authorization': userToken
        }
    })
    .then(res => res.json())
    .then(data => dispatch ({
        type: GET_ALL_PLACES,
        payload: data
    }))
    // .catch(err => console.log(err))
}

export default getPlacesAction;
