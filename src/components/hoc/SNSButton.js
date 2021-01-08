import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPopup } from '../../redux/popup/popup.actions';

const SNSButton = ({ route, styleClass, buttonText, icon, showPopup }) => {
  const handleClick = e => {
    e.preventDefault();

    if (
      buttonText === 'SNS Post' ||
      buttonText === 'Food Post' ||
      buttonText === 'Upload Post' || buttonText === "Edit Profile"
    ) {
      if (buttonText === 'Upload Post') buttonText = 'Food Post';
        buttonText === "Edit Profile" ? showPopup({ isOpen: false, isProfileOpen: true, route, buttonText, type: 'sns' }) : buttonText === 'SNS Post'
        ? showPopup({ isOpen: true, isProfileOpen: false, route, buttonText, type: 'sns' })
        : showPopup({ isOpen: true, isProfileOpen: false, route, buttonText, type: 'food' });
    }
  };
  return (
    <a href={route} className={styleClass} onClick={handleClick}>
      {icon ? <i className={icon} /> : null} {buttonText}
    </a>
  );
};

SNSButton.propTypes = {
  showPopup: PropTypes.func.isRequired,
};

export default connect(null, { showPopup })(SNSButton);
