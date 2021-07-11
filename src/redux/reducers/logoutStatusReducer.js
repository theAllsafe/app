import { ActionTypes } from '../constants/actionTypes';
const initialState = { logoutstatus: false };

const logoutStatusReducer = ( state = initialState, { type, payload } )=>{

    switch(type){

        case ActionTypes.IS_LOGGEDOUT:
            return { ...state, userData: payload };
            
        default:
            return state;
    }

}
export default logoutStatusReducer;