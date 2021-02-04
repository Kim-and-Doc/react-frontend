import React from 'react';
import Alert from '../components/hoc/Alert';
import useScript from '../utils/useScript.hook';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/hoc/Navbar';
import Footer from '../components/hoc/Footer';

const Forgot = ({ alerts }) => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609606257/SNF/js/webflow_tdaogu.js',
  );
  return (
    <div className="flex-body">
      <Navbar type="sns" />
      <div className="profile-container">
        <div className="auth-container">
          {alerts.length > 0 ? <Alert /> : null}
          <div className="auth-wrap">
            <div
              data-duration-in="300"
              data-duration-out="100"
              className="auth-tabs w-tabs"
            >
              <div className="auth-tab-menu forgot-menu w-tab-menu">
                <button
                  data-w-tab="Tab 3"
                  className="auth-tab-link w-inline-block w-tab-link w--current"
                >
                  <div>Forgot Password</div>
                </button>
              </div>
              <div className="auth-tab-content forgot-content w-tab-content">
                <div
                  data-w-tab="Tab 3"
                  className="auth-tab-pane forgot-pane w-tab-pane w--tab-active"
                >
                  <section id="contact-form" className="auth-section">
                    <div className="auth-form-container w-container">
                      <h2 className="auth-header">Forgot Password</h2>
                      <div id="formInstructions" className="auth-text">
                        <em>
                          Please enter the your email account to reset your
                          password.
                        </em>
                      </div>
                      <div className="auth-form-block reg-block">
                        <form className="auth-form">
                          <div className="auth-input-wrap">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              className="auth-text-field w-input"
                              autoFocus="true"
                              maxLength="256"
                              name="email"
                              required
                            />
                          </div>
                          <input
                            type="submit"
                            value="Reset"
                            className="profile-side-btn w-button"
                          />
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-area-post-list">
          <Footer type="sns" />
        </div>
      </div>
    </div>
  );
};

Forgot.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, {})(Forgot);
