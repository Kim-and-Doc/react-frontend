import { SHOW_POPUP, CLOSE_POPUP } from '../types';
// import axios from 'axios';

export const showPopup = ({ isOpen, route, buttonText }) => dispatch => {
  dispatch({
    type: SHOW_POPUP,
    payload: { isOpen, route, buttonText },
  });
};

export const closePopup = () => dispatch => {
  dispatch({
    type: CLOSE_POPUP,
    payload: false,
  });
};
