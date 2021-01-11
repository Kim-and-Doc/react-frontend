import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from '../../redux/popup/popup.actions';

const PopupProfileForm = ({ closePopup, route, buttonText, type }) => {
  return (
    <div className="popup-bg">
      <div className="profile-popup-wrap">
          <div className="popup-header">
        <h3 className="heading-2">Edit Profile</h3>
        <button
            onClick={closePopup}
            className='close-x profile-close-btn w-button'
          >
            <strong>X</strong>
          </button>
      </div>
      <div className="hr"></div>
      <div className="profile-popup">
        <section className="profile-form-wrap">
          <div className="profile-form-inputs w-container">
            <div className="profile-form">
              <form
                className="profile-inputs"
              >
                <div className="profile-form-grid">
                  <div id="w-node-06eb93095a44-f9dccc7a">
                    <label htmlFor="profileImage">
                      Upload a Profile Image:
                    </label>
                    <input
                type="file"
                className="popup-file-upload"
                maxLength="256"
                name="profileImage"
                accept="image/*|video/*"
              />
                  </div>
                  <div id="w-node-06eb93095a34-f9dccc7a">
                    <label htmlFor="fname" >
                      First name:
                    </label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="fname"
                    />
                  </div>
                  <div id="w-node-06eb93095a38-f9dccc7a">
                    <label htmlFor="lname" id="contact-last-name">
                      Last name:
                    </label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="lname"
                    />
                  </div>
                  <div id="w-node-06eb93095a3c-f9dccc7a">
                    <label htmlFor="email">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="email"
                    />
                  </div>
                  <div id="w-node-9c0ee5ec380f-f9dccc7a">
                    <label htmlFor="favFood">
                      Favourite Food:
                    </label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="favFood"
                    />
                  </div>
                  <div id="w-node-96cb1c65d622-f9dccc7a">
                    <label htmlFor="city" id="contact-email">
                      City:
                    </label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="city"
                    />
                  </div>
                  <div>
                    <label htmlFor="country">
                      Country
                    </label>
                    <select
                      id="field-4"
                      name="country"
                      className="select-input w-select"
                    >
                      <option value="">Select one...</option>
                      <option value="First">First Choice</option>
                      <option value="Second">Second Choice</option>
                      <option value="Third">Third Choice</option>
                    </select>
                  </div>
                  <div
                    id="w-node-06eb93095a40-f9dccc7a"
                    className="bday-wrapper"
                  >
                    <label>
                      Birthday
                    </label>
                    <div className="w-layout-grid birth-grid">
                      <div id="w-node-4002f30f4380-f9dccc7a">
                        <label htmlFor="bdayMonth">
                          Month:
                        </label>
                        <select
                          name="bdayMonth"
                          className="select-input w-select"
                        >
                          <option value="">MM</option>
                          <option value="First">First Choice</option>
                          <option value="Second">Second Choice</option>
                          <option value="Third">Third Choice</option>
                        </select>
                      </div>
                      <div id="w-node-c0670fdbd6aa-f9dccc7a">
                        <label htmlFor="bdayDay">
                          Day:
                        </label>
                        <select
                          name="bdayDay"
                          className="select-input w-select"
                        >
                          <option value="">DD</option>
                          <option value="First">First Choice</option>
                          <option value="Second">Second Choice</option>
                          <option value="Third">Third Choice</option>
                        </select>
                      </div>
                      <div id="w-node-cc07c1f1eda1-f9dccc7a">
                        <label htmlFor="bdayYear">
                          Year:
                        </label>
                        <select
                          name="bdayYear"
                          className="select-input w-select"
                        >
                          <option value="">YYYY</option>
                          <option value="First">First Choice</option>
                          <option value="Second">Second Choice</option>
                          <option value="Third">Third Choice</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-37410acdc48d-f9dccc7a">
                    <label htmlFor="profileBanner" id="contact-message">
                      Upload a Profile Banner Image:
                    </label>
                    <input
                type="file"
                className="popup-file-upload"
                maxLength="256"
                name="profileBanner"
                accept="image/*|video/*"
              />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Save"
                  className="post-btn w-button"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

PopupProfileForm.prototype = {
  closePopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  route: state.popup.route,
  buttonText: state.popup.buttonText,
  type: state.popup.type,
});

export default connect(mapStateToProps, { closePopup })(PopupProfileForm);
