import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [], // reducer string ex. 'cart', 'user'
};

const rootReducer = combineReducers({
  // user: persistReducer(authPersistConfig,userReducer)
});

export default persistReducer(rootPersistConfig, rootReducer);
