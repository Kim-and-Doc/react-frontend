import React from 'react';
import AuthTab from './AuthTab';

const AuthTabMenu = () => {
  return (
    <div className="auth-tab-menu w-tab-menu">
      <AuthTab
        tab="Tab 1"
        cName="auth-tab-link w-inline-block w-tab-link w--current"
        content="Login"
      />
      <AuthTab
        tab="Tab 2"
        cName="auth-tab-link w-inline-block w-tab-link"
        content="Register"
      />
      <AuthTab
        tab="Tab 3"
        cName="auth-tab-link w-inline-block w-tab-link"
        content="Forgot Password"
      />
    </div>
  );
};
export default AuthTabMenu;
