import React from 'react';
import Footer from '../components/hoc/Footer';
import Navbar from '../components/hoc/Navbar';
import useScript from '../utils/useScript.hook'

const Auth = () => {
    useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609606257/SNF/js/webflow_tdaogu.js',
  );
  return (
    <div className="flex-body">
    <Navbar />
    <div className="profile-container">
      <div className="auth-container">
        <div
          data-duration-in="300"
          data-duration-out="100"
          className="auth-tabs w-tabs"
        >
          <div className="auth-tab-menu w-tab-menu">
            <button
              data-w-tab="Tab 1"
              className="auth-tab-link w-inline-block w-tab-link w--current"
            >
              <div>Login</div>
            </button>
            <button
              data-w-tab="Tab 2"
              className="auth-tab-link w-inline-block w-tab-link"
            >
              <div>Register</div>
            </button>
            <button
              data-w-tab="Tab 3"
              className="auth-tab-link w-inline-block w-tab-link"
            >
              <div>Forgot Password</div>
            </button>
          </div>
          <div className="auth-tab-content w-tab-content">
            <div
              data-w-tab="Tab 1"
              className="auth-tab-pane w-tab-pane w--tab-active"
            >
              <section id="contact-form" className="auth-section">
                <div className="auth-form-container w-container">
                  <h2 className="auth-header">Login</h2>
                  <div className="auth-form-block">
                    <form
                      className="auth-form"
                    >
                      <div className="auth-form-grid">
                        <div id="w-node-4698c9b49880-97f8b18f">
                          <label htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            className="auth-text-field w-input"
                            maxLength="256"
                            name="email"
                            required
                            autofocus
                          />
                        </div>
                        <div id="w-node-4698c9b49884-97f8b18f">
                          <label
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="auth-text-field w-input"
                            maxLength="256"
                            name="password"
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        className="profile-side-btn w-button"
                      />
                    </form>
                  </div>
                </div>
              </section>
            </div>
            <div data-w-tab="Tab 2" className="auth-tab-pane w-tab-pane">
              <section id="contact-form" className="auth-section">
                <div className="auth-form-container w-container">
                  <h2 className="auth-header">Register</h2>
                  <div className="auth-form-block">
                    <form
                      className="auth-form"
                    >
                      <div className="auth-form-grid">
                        <div id="w-node-ac0152192192-97f8b18f">
                          <label htmlFor="firstName">
                            First name
                          </label>
                          <input
                            type="text"
                            className="auth-text-field w-input"
                            maxLength="256"
                            name="firstName"
                            required
                          />
                        </div>
                        <div id="w-node-ac0152192196-97f8b18f">
                          <label htmlFor="lastName">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="auth-text-field w-input"
                            maxLength="256"
                            name="lastName"
                            required
                          />
                        </div>
                        <div id="w-node-ac015219219a-97f8b18f">
                          <label htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            className="auth-text-field w-input"
                            maxLength="256"
                            name="email"
                            required
                          />
                        </div>
                        <div id="w-node-ac015219219e-97f8b18f">
                          <label
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="auth-text-field w-input"
                            maxLength="256"
                            name="password"
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Register"
                        className="profile-side-btn w-button"
                      />
                    </form>
                  </div>
                </div>
              </section>
            </div>
            <div data-w-tab="Tab 3" className="auth-tab-pane w-tab-pane">
              <section id="contact-form" className="auth-section">
                <div className="auth-form-container w-container">
                  <h2 className="auth-header">Forgot Password</h2>
                  <div id="formInstructions" className="auth-text">
                    <em>
                      Please enter the your email account to reset your
                      password.
                    </em>
                  </div>
                  <div className="auth-form-block">
                    <form
                      className="auth-form"
                    >
                      <div className="auth-form-grid">
                        <div id="w-node-970e0dec08ba-97f8b18f">
                          <label
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="auth-text-field w-input"
                            autoFocus
                            maxLength="256"
                            name="email"
                            required
                          />
                        </div>
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
      
        <div className="main-content-area-post-list">
          <Footer />
        </div>
      </div>
      
    </div>
  );
};
export default Auth;
