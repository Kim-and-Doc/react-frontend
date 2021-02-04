import React from 'react';
import CreatePost from '../components/post/CreatePost';
import Footer from '../components/hoc/Footer';
import Navbar from '../components/hoc/Navbar';
import ProfileBanner from '../components/sidebar/ProfileBanner';
import ProfileSideRight from '../components/sidebar/ProfileSideRight';
import SNSPost from '../components/post/SNSPost';
import useScript from '../utils/useScript.hook';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopupForm from '../components/hoc/PopupPostForm';
import PopupProfileForm from '../components/hoc/PopupProfileForm';
import ProfileSideLeft from '../components/sidebar/ProfileSideLeft';

const Profile = ({ isOpen, isProfileOpen }) => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609606257/SNF/js/webflow_tdaogu.js',
  );
  return (
    <div className="flex-body">
      {isOpen ? <PopupForm /> : null}
      {isProfileOpen ? <PopupProfileForm /> : null}
      <Navbar type="sns" />
      <ProfileBanner />
      <div className="divider" />
      <ProfileSideLeft />
      <ProfileSideRight />
      <div className="profile-container">
        <div className="profile-content">
          <div className="divider" />
          <CreatePost />
          <div className="divider" />
          <SNSPost />
          <div className="divider" />
        </div>
        <div className="main-content-area-post-list">
          <Footer type="sns" />
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isProfileOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isOpen: state.popup.isOpen,
  isProfileOpen: state.popup.isProfileOpen,
});
export default connect(mapStateToProps, {})(Profile);
