import { REDIRECTED, LOGOUT } from '../types';

export const unauthRedirect = () => dispatch => {
  dispatch({
    type: REDIRECTED,
    payload: { redirect: true, logout: false },
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: { redirect: true, logout: true },
  });
};
