import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (cName, msg, timeout) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { cName, msg, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const clearAlerts = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_ALERTS,
    });
  }, 5000);
};
