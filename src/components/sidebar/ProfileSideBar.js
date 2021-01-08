import React from 'react';

const ProfileSideBar = () => {
  return (
    <div className="profile-side post-comment">
      <div className="divider" />
      <div className="profile-info-container bio">
        <div className="profile-info">
          <h3 className="header-font">About</h3>
          <h5 className="header-font">Name:</h5>
          <div className="about-name">
            <div className="first-name">Sooeun</div>
            <div className="last-name">Kim</div>
          </div>
          <h5 className="header-font">Birthday:</h5>
          <div className="about-birth">February 17, 1997</div>
          <h5 className="header-font">Favourite Food:</h5>
          <div>Pasta</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="setting-container">
        <a href="/404" className="profile-side-btn w-button">
          <i className="fas fa-cog" /> Edit Profile
        </a>
      </div>
      <div className="divider"></div>
      <div className="setting-container">
        <a href="/404" className="profile-side-btn w-button">
          <i className="fas fa-photo-video" /> Favourite Food Posts
        </a>
      </div>
      <div className="divider"></div>
      <div className="setting-container">
        <a href="/404" className="profile-side-btn w-button">
          <i className="fas fa-user-friends" /> Friends
        </a>
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default ProfileSideBar;
