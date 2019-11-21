import { combineReducers } from 'redux'
import userReducer from './auth/userReducer';
import placeReducer from './places/placeReducer'

const rootReducer = combineReducers({
    user: userReducer,
    places: placeReducer
});

export default rootReducer;
