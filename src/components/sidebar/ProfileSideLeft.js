import React from 'react'
import SNSButton from '../hoc/SNSButton'

const ProfileSideLeft = () => {
    return (
        <div class="profile-side post-comment profile-left">
      <div class="setting-container">
        <SNSButton
          route="#"
              styleClass="profile-side-btn w-button"
              buttonText="Edit Profile"
              icon="fas fa-cog"
              />
      </div>
      <div class="divider"></div>
      <div class="setting-container">
        <SNSButton
          route="#"
              styleClass="profile-side-btn w-button"
              buttonText="Favourite Food Posts"
              icon="fas fa-photo-video"
              />
      </div>
      <div class="divider"></div>
      <div class="setting-container">
        <SNSButton
          route="#"
              styleClass="profile-side-btn w-button"
              buttonText="Friends"
              icon="fas fa-user-friends"
              />
      </div>
    </div>
    )
}
export default ProfileSideLeft;