import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from '../../redux/popup/popup.actions';

const PopupPostForm = ({ closePopup, route, buttonText, type, cName }) => {
  const [file, setFile] = useState();

  const handleFileInput = e => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile();
    }
  };

  return (
    <div className={cName ? cName : 'popup-bg'}>
      <div className="popup">
        <div className="popup-header">
          <h3 className="popup-head">Create a {buttonText}</h3>
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
          <div className="popup-form-block" id="form-wrap">
            <form className="popup-form">
              <textarea
                placeholder={`What's on your mind, ${'CHANGE THIS TO NAME'}?`}
                maxLength="5000"
                id="post"
                name="post"
                required
                className="popup-textarea w-input"
              ></textarea>
              <div className="file-input-wrap">
                <input
                  type="file"
                  id="file"
                  className="popup-file-upload"
                  name="file"
                  accept="image/*|video/*"
                  onChange={handleFileInput}
                />
                <label htmlFor="file" className="popup-file-upload" />
                <span className="file-name-span">
                  {file ? file.name : 'No file uploaded'}
                </span>
              </div>
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
