import { SHOW_POPUP, CLOSE_POPUP } from '../types';

const INI_STATE = {
  isOpen: false,
  route: null,
  buttonText: null,
};

const userReducer = (state = INI_STATE, { type, payload }) => {
  switch (type) {
    case SHOW_POPUP:
      return {
        ...state,
        isOpen: payload.isOpen,
        route: payload.route,
        buttonText: payload.buttonText,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        isOpen: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
