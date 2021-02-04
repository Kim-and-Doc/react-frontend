import React from 'react';

const AuthTabContent = () => {
  return (
    <div className="auth-tab-content w-tab-content">
      <div
        data-w-tab="Tab 1"
        className="auth-tab-pane w-tab-pane w--tab-active"
      >
        <section id="contact-form" className="auth-section">
          <div className="auth-form-container w-container">
            <div className="auth-form-block">
              <form
                id="wf-form-Contact-Form"
                name="wf-form-Contact-Form"
                data-name="Contact Form"
                className="auth-form"
              >
                <div className="auth-input-wrap">
                  <label htmlFor="email" id="contact-email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="auth-text-field w-input"
                    autoFocus="true"
                    maxLength="256"
                    name="email"
                    required
                  />
                </div>
                <div className="auth-input-wrap">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="auth-text-field w-input"
                    autoFocus="true"
                    maxLength="256"
                    name="password"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="profile-side-btn w-button"
                />
              </form>
            </div>
            <a href="/forgot" className="forgot-link">
              Forgot Password?
            </a>
          </div>
        </section>
      </div>
      <div data-w-tab="Tab 2" className="auth-tab-pane w-tab-pane">
        <section id="contact-form" className="auth-section">
          <div className="auth-form-container w-container">
            <div className="auth-form-block reg-block">
              <form
                id="wf-form-Contact-Form"
                name="wf-form-Contact-Form"
                data-name="Contact Form"
                className="auth-form"
              >
                <div className="auth-input-wrap-flex">
                  <div className="auth-input-wrap">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      autoFocus="true"
                      maxLength="256"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="auth-input-wrap">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      autoFocus="true"
                      maxLength="256"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="auth-input-wrap">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="auth-text-field w-input"
                    maxLength="256"
                    name="email"
                    placeholder="jdoe@gmail.com"
                    required
                  />
                </div>
                <div className="auth-input-wrap">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="auth-text-field w-input"
                    autoFocus="true"
                    maxLength="256"
                    name="password"
                    required
                  />
                </div>
                <div className="auth-input-wrap">
                  <label htmlFor="confirmPass">Confirm Password</label>
                  <input
                    type="password"
                    className="auth-text-field w-input"
                    autoFocus="true"
                    maxLength="256"
                    name="confirmPass"
                    required
                  />
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
    </div>
  );
};
export default AuthTabContent;
