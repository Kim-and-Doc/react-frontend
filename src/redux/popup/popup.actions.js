import { SHOW_POPUP, CLOSE_POPUP } from '../types';
// import axios from 'axios';

export const showPopup = ({ isOpen, isProfileOpen ,route, buttonText, type }) => dispatch => {
  dispatch({
    type: SHOW_POPUP,
    payload: { isOpen, isProfileOpen,route, buttonText, type },
  });
};

export const closePopup = () => dispatch => {
  dispatch({
    type: CLOSE_POPUP,
    payload: false,
  });
};
