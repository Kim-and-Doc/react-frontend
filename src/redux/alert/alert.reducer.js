import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from '../types';
const INI_STATE = [];

const alertReducer = (state = INI_STATE, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    case CLEAR_ALERTS:
      return INI_STATE;
    default:
      return state;
  }
};
export default alertReducer;
