import { combineReducers } from 'redux';
import { DATA, LOGIN } from '../actions';

function data(state = [],action){
    switch(action.type){
        case DATA:
            return action.data;
            break;
        default:
            return state;
            break;
    }
}

function loginStatus(state = false, action){
    switch(action.type){
        case LOGIN:
            return action.status;
            break;
        default:
            return state;
            break;
    }
}

const rootReducer = combineReducers({
    data,
    loginStatus
});

export default rootReducer;