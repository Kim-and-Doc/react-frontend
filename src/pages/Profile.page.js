import React from 'react';
import CreatePost from '../components/post/CreatePost';
import Footer from '../components/hoc/Footer';
import Navbar from '../components/hoc/Navbar';
import ProfileBanner from '../components/sidebar/ProfileBanner';
import ProfileSideBar from '../components/sidebar/ProfileSideBar';
import SNSPost from '../components/post/SNSPost';
import useScript from '../utils/useScript.hook';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopupForm from '../components/hoc/PopupForm';

const Profile = ({ isOpen }) => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609606257/SNF/js/webflow_tdaogu.js',
  );
  return (
    <div className="flex-body">
      {isOpen ? <PopupForm /> : null}
      <Navbar />
      <ProfileBanner />
      <div className="divider" />
      <ProfileSideBar />
      <div className="profile-container">
        <div className="profile-content">
          <div className="divider" />
          <CreatePost />
          <div className="divider" />
          <SNSPost />
          <div className="divider" />
        </div>
        <div className="main-content-area-post-list">
          <Footer />
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isOpen: state.popup.isOpen,
});
export default connect(mapStateToProps, {})(Profile);
