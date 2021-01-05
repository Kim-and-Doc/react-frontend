import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from '../../redux/popup/popup.actions';

const PopupForm = ({ closePopup, route, buttonText }) => {
  return (
    <div className="popup-bg" onClick={closePopup}>
      <div className="popup">
        <div className="popup-header">
          <h3 className="heading-2">Create a {buttonText}</h3>
          <button onClick={closePopup} className="close-x w-button">
            <strong>X</strong>
          </button>
        </div>
        <div className="hr"></div>
        <div className="popup-input">
          <div className="popup-form-block">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="popup-form"
            >
              <textarea
                placeholder="What&#x27;s on your mind, Suzy?"
                maxLength="5000"
                id="post"
                name="post"
                required=""
                data-name="post"
                className="popup-textarea w-input"
              ></textarea>
              <input
                type="file"
                className="popup-file-upload"
                maxLength="256"
                name="file"
                accept="image/*|video/*"
              />
              <input type="submit" value="Post" className="post-btn w-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupForm.prototype = {
  closePopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  route: state.popup.route,
  buttonText: state.popup.buttonText,
});

export default connect(mapStateToProps, { closePopup })(PopupForm);
