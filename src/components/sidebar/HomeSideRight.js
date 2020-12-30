import React from 'react';
import Notification from './Notification';

const HomeSideRight = () => {
  return (
    <div className="home-profile-side right">
      <div className="divider" />
      <div className="profile-info-container notif-container">
        <div className="profile-info">
          <h4 className="header-font notif-header">Notifications</h4>
          <Notification
            content="This is some text inside of a div block."
            date="3 days ago"
            upperStyleClass="profile-img-div profile-small notif-image"
            image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
            altTxt="User Icon"
            styleClass="profile-image"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeSideRight;
