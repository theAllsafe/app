import { ActionTypes } from '../constants/actionTypes';
const initialState = { loginstatus: false };

const loginStatusReducer = ( state = initialState, { type, payload } )=>{

    switch(type){

        case ActionTypes.IS_LOGGEDIN:
            return { ...state, loginstatus: payload };
            
        default:
            return state;
    }

}
export default loginStatusReducer;