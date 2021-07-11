import { ActionTypes } from '../constants/actionTypes';
const initialState = { showmenu: false };

const menuReducer = ( state = initialState, { type, payload } )=>{

    switch(type){

        case ActionTypes.SHOW_CUSTOMER_SIDE_MENU:
            return { ...state, showmenu: payload };
            
        default:
            return state;
    }

}
export default menuReducer;