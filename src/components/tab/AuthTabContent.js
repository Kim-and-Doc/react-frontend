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
            <h2 className="auth-header">Login</h2>
            <div className="auth-form-block">
              <form className="auth-form">
                <div className="auth-form-grid">
                  <div id="w-node-4698c9b49880-97f8b18f">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="email"
                      required
                      autoFocus
                    />
                  </div>
                  <div id="w-node-4698c9b49884-97f8b18f">
                    <label htmlFor="password">Password</label>
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
              <form className="auth-form">
                <div className="auth-form-grid">
                  <div id="w-node-ac0152192192-97f8b18f">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="firstName"
                      required
                    />
                  </div>
                  <div id="w-node-ac0152192196-97f8b18f">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="lastName"
                      required
                    />
                  </div>
                  <div id="w-node-ac015219219a-97f8b18f">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="auth-text-field w-input"
                      maxLength="256"
                      name="email"
                      required
                    />
                  </div>
                  <div id="w-node-ac015219219e-97f8b18f">
                    <label htmlFor="password">Password</label>
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
                Please enter the your email account to reset your password.
              </em>
            </div>
            <div className="auth-form-block">
              <form className="auth-form">
                <div className="auth-form-grid">
                  <div id="w-node-970e0dec08ba-97f8b18f">
                    <label htmlFor="email">Email</label>
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
  );
};
export default AuthTabContent;
