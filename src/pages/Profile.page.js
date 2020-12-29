import React from 'react';
import CreatePost from '../components/CreatePost';
import Footer from '../components/hoc/Footer';
import Navbar from '../components/hoc/Navbar';
import ProfileBanner from '../components/ProfileBanner';
import ProfileSideBar from '../components/ProfileSideBar';
import SNSPost from '../components/SNSPost';
import useScript from '../utils/useScript.hook';

const Profile = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609013151/portfolio/js/snf-webflow_rnkr6i.js',
  );
  return (
    <div className="flex-body">
      <Navbar />
      <ProfileBanner />
      <div className="divider"/>
      <ProfileSideBar />
      <div className="profile-container">
        <div className="profile-content">
          <div className="divider"/>
          <CreatePost />
          <div className="divider"/>
          <SNSPost />
          <div className="divider"/>
        </div>
        <div className="main-content-area-post-list">
        <Footer />
</div>

      </div>
    </div>
  );
};
export default Profile;
