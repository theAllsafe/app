import { ActionTypes } from '../constants/actionTypes';
const initialState = {};

const userDataReducer = ( state = initialState, { type, payload } )=>{

    switch(type){

        case ActionTypes.GET_USER_DATA:
            return { ...state, logoutstatus: payload };
            
        default:
            return state;
    }

}
export default userDataReducer;