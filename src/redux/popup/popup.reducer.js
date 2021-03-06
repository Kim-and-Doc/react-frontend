import { SHOW_POPUP, CLOSE_POPUP } from '../types';

const INI_STATE = {
  isOpen: false,
  isProfileOpen: false,
  route: null,
  buttonText: null,
  type: null,
};

const userReducer = (state = INI_STATE, { type, payload }) => {
  switch (type) {
    case SHOW_POPUP:
      return {
        ...state,
        isOpen: payload.isOpen,
        isProfileOpen: payload.isProfileOpen,
        route: payload.route,
        buttonText: payload.buttonText,
        type: payload.type,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        isOpen: payload,
        isProfileOpen: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
