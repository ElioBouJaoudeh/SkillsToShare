import { combineReducers } from "redux";

import notes from './itemReducer';
import auth from './authReducer';

export default combineReducers({
    notes, auth 
});