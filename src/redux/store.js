import { createStore } from 'redux';
import reducers from './reducers/index';
import { persistStore } from 'redux-persist';

const store = createStore( reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__() );

const persistor = persistStore( store )

export { store, persistor };