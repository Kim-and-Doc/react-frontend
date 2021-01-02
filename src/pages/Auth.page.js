import React from 'react';
import Footer from '../components/hoc/Footer';
import Navbar from '../components/hoc/Navbar';
import AuthTabContent from '../components/tab/AuthTabContent';
import AuthTabMenu from '../components/tab/AuthTabMenu';
import useScript from '../utils/useScript.hook';

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
            <AuthTabMenu />
            <AuthTabContent />
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
