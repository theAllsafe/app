import { ActionTypes } from '../constants/actionTypes';

const logoutStatus = (logout)=>{

    return {

        type: ActionTypes.IS_LOGGEDIN,
        
        payload: logout

    }

}
export default logoutStatus;