import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user/user.reducer';
import popup from './popup/popup.reducer'

// reducers
const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user,
  popup,
});

export default persistReducer(rootPersistConfig, rootReducer);
