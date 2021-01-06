import { REDIRECTED, LOGOUT } from '../types';
const INI_STATE = {
  isLoading: null,
  isAuthenticated: false,
  currentUser: null,
  isRedirect: false,
  isLogout: false,
};

const userReducer = (state = INI_STATE, { type, payload }) => {
  switch (type) {
    case REDIRECTED:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
        isRedirect: payload.redirect,
        isLogout: payload.logout,
      };
    default:
      return state;
  }
};
export default userReducer;
