import { ActionTypes } from '../constants/actionTypes';
const showMenu = (menuStatus)=>{

    return {

        type: ActionTypes.SHOW_CUSTOMER_SIDE_MENU,
        
        payload: menuStatus

    }

}
export default showMenu;