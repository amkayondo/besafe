import {
    placeTypes
} from '../../types';
const {
    GET_ALL_PLACES,
    ADD_NEW_PLACE,
    REMOVE_PLACE
} = placeTypes;

const initialState = {
    placesdata: {
    }
}

const placeReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PLACES:
            return {
                ...state,
                placesdata: action.payload
            }
        case ADD_NEW_PLACE:
            return {
                ...state,
                placesdata: action.payload
            }
        case REMOVE_PLACE:
            return {
                ...state,
                placesdata: action.payload
            }
        default:
            return state
    }
}

export default placeReducer;
