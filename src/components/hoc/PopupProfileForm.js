import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup } from '../../redux/popup/popup.actions';

const PopupProfileForm = ({ closePopup, route, buttonText, type }) => {
  const [profileImage, setProfileImage] = useState();
  const [profileBanner, setProfileBanner] = useState();

  const handleImage = e => {
    if (e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    } else {
      setProfileImage();
    }
  };
  const handleBanner = e => {
    if (e.target.files.length > 0) {
      setProfileBanner(e.target.files[0]);
    } else {
      setProfileBanner();
    }
  };
  return (
    <div className="popup-bg">
      <div className="popup profile-popup-wrap">
        <div className="popup-header">
          <h3 className="popup-head">Edit Profile</h3>
          <button onClick={closePopup} className="close-x w-button">
            <strong>X</strong>
          </button>
        </div>
        <div className="hr"></div>
        <div className="profile-popup">
          <section id="contact-form" className="profile-form-wrap">
            <div className="profile-form-inputs w-container">
              <div className="profile-form w-form">
                <form className="profile-inputs">
                  <div className="profile-form-grid">
                    <div id="w-node-4d181aff1c71-f9dccc7a">
                      <label htmlFor="profileImg">
                        Upload a Profile Image:
                      </label>
                      <div className="file-input-wrap">
                        <input
                          type="file"
                          id="file"
                          className="popup-image-upload"
                          name="profileImg"
                          accept="image/*"
                          onChange={handleImage}
                        />
                        <label htmlFor="file" className="popup-image-upload" />
                        <span className="file-name-span">
                          {profileImage
                            ? profileImage.name
                            : 'No File Uploaded'}
                        </span>
                      </div>
                    </div>
                    <div id="w-node-4d181aff1c9d-f9dccc7a">
                      <label htmlFor="profileBanner">
                        Upload a Profile Banner Image:
                      </label>
                      <div className="file-input-wrap">
                        <input
                          type="file"
                          id="file"
                          className="popup-image-upload"
                          name="profileBanner"
                          accept="image/*"
                          onChange={handleBanner}
                        />
                        <label htmlFor="file" className="popup-image-upload" />
                        <span className="file-name-span">
                          {profileBanner
                            ? profileBanner.name
                            : 'No File Uploaded'}
                        </span>
                      </div>
                    </div>
                    <div id="w-node-4d181aff1c75-f9dccc7a">
                      <label htmlFor="firstName">First name:</label>
                      <input
                        type="text"
                        className="auth-text-field w-input"
                        maxLength="256"
                        name="firstName"
                        required
                      />
                    </div>
                    <div id="w-node-4d181aff1c79-f9dccc7a">
                      <label htmlFor="lastName">Last name:</label>
                      <input
                        type="text"
                        className="auth-text-field w-input"
                        maxLength="256"
                        name="lastName"
                        required
                      />
                    </div>
                    <div id="w-node-4d181aff1c7d-f9dccc7a">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="auth-text-field w-input"
                        maxLength="256"
                        name="email"
                        required
                      />
                    </div>
                    <div id="w-node-4d181aff1c81-f9dccc7a">
                      <label htmlFor="favFood">Favourite Food:</label>
                      <input
                        type="text"
                        className="auth-text-field w-input"
                        maxLength="256"
                        name="favFood"
                      />
                    </div>
                    <div id="w-node-4d181aff1c85-f9dccc7a">
                      <label htmlFor="city">City:</label>
                      <input
                        type="text"
                        className="auth-text-field w-input"
                        maxLength="256"
                        name="city"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="country">Country</label>
                      <select
                        id="country"
                        name="country"
                        className="select-input w-select"
                      >
                        <option value="">Select a Country...</option>
                        <option value="Canada">Canada</option>
                        <option value="Korea">Korea</option>
                        <option value="Japan">Japan</option>
                      </select>
                    </div>
                    <div
                      id="w-node-4d181aff1c8d-f9dccc7a"
                      className="bday-wrapper"
                    >
                      <label htmlFor="bday">Birthday</label>
                      <div className="w-layout-grid birth-grid">
                        <div id="w-node-4d181aff1c91-f9dccc7a">
                          <label htmlFor="bdayMonth">Month:</label>
                          <select
                            id="bdayMonth"
                            name="bdayMonth"
                            className="select-input w-select"
                          >
                            <option value="MM">Month...</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                        </div>
                        <div id="w-node-4d181aff1c95-f9dccc7a">
                          <label htmlFor="Last-Name-3" id="contact-last-name">
                            Day:
                          </label>
                          <select
                            id="field-3"
                            name="field-3"
                            className="select-input w-select"
                          >
                            <option value="DD">Day...</option>
                            <option value="01">Create loop for this</option>
                          </select>
                        </div>
                        <div id="w-node-4d181aff1c99-f9dccc7a">
                          <label htmlFor="Last-Name-3" id="contact-last-name">
                            Year:
                          </label>
                          <select
                            id="field-3"
                            name="field-3"
                            className="select-input w-select"
                          >
                            <option value="YYYY">Year...</option>
                            <option value="1999">Create a loop for this</option>
                            <option value="1997">1997</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
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
