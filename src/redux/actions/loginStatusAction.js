import { ActionTypes } from '../constants/actionTypes';

const loginStatus = (loginStatus)=>{

    return {

        type: ActionTypes.IS_LOGGEDIN,
        
        payload: loginStatus

    }

}
export default loginStatus;