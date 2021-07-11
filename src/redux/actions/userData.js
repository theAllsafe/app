import { ActionTypes } from '../constants/actionTypes';

const userData = (userData)=>{

    return {

        type: ActionTypes.IS_LOGGEDIN,
        
        payload: userData

    }

}
export default userData;