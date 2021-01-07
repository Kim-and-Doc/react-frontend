import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPopup } from '../../redux/popup/popup.actions';

const SNSButton = ({ route, styleClass, buttonText, icon, showPopup }) => {
  const handleClick = e => {
    e.preventDefault();
    if (buttonText === 'SNS Post' || buttonText === 'Food Post') {
      buttonText === 'SNS Post'
        ? showPopup({ isOpen: true, route, buttonText, type: 'sns' })
        : showPopup({ isOpen: true, route, buttonText, type: 'food' });
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
