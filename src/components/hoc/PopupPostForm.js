import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from '../../redux/popup/popup.actions';

const PopupPostForm = ({ closePopup, route, buttonText, type, cName }) => {
  return (
    <div className={cName ? cName : "popup-bg"}>
      <div className="popup"
      >
        <div className="popup-header">
          <h3 className="heading-2">Create a {buttonText}</h3>
          <button
            onClick={closePopup}
            className={
              type === 'food' ? 'close-x-food w-button' : 'close-x w-button'
            }
          >
            <strong>X</strong>
          </button>
        </div>
        <div className="hr"></div>
        <div className="popup-input">
          <div className="popup-form-block">
            <form className="popup-form">
              <textarea
                placeholder="What&#x27;s on your mind, CHANGE THIS TO nAME?"
                maxLength="5000"
                id="post"
                name="post"
                required
                className="popup-textarea w-input"
              ></textarea>
              <input
                type="file"
                className="popup-file-upload"
                maxLength="256"
                name="file"
                accept="image/*|video/*"
              />
              <input
                type="submit"
                value="Post"
                className={
                  type === 'food'
                    ? 'post-btn-food w-button'
                    : 'post-btn w-button'
                }
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupPostForm.prototype = {
  closePopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  route: state.popup.route,
  buttonText: state.popup.buttonText,
  type: state.popup.type,
});

export default connect(mapStateToProps, { closePopup })(PopupPostForm);
