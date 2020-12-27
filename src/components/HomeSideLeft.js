import React from 'react';
import Button from './SNSButton';

const HomeSideLeft = () => {
  return (
    <div className="home-profile-side left">
      <div className="divider"></div>
      <div className="setting-container">
        <Button
          route="/404"
          styleClass="profile-side-btn w-button"
          buttonText="My Profile"
          icon="fas fa-user"
        />
      </div>
      <div className="divider"></div>
      <div className="setting-container">
        <Button
          route="/404"
          styleClass="profile-side-btn w-button"
          buttonText="Food Posts"
          icon="fas fa-camera-retro"
        />
      </div>
      <div className="divider"></div>
      <div className="setting-container">
        <Button
          route="/404"
          styleClass="profile-side-btn w-button"
          buttonText="Photos/Videos"
          icon="fas fa-photo-video"
        />
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default HomeSideLeft;
