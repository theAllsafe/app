import { combineReducers }  from 'redux';
import menuReducer from './menuReducer';
import loginStatusReducer from './loginStatusReducer';
import logoutStatusReducer from './logoutStatusReducer';
import userDataReducer from './userDataReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	
	key: 'root',
	storage,
	whitelist: [ 'loginStatus', 'logoutStatus', 'userData' ]
	
}
const reducers = combineReducers({

    showsideMenu: menuReducer,
	
	loginStatus: loginStatusReducer,
	
	logoutStatus: logoutStatusReducer,
	
	userData: userDataReducer,

});
export default persistReducer( persistConfig, reducers );