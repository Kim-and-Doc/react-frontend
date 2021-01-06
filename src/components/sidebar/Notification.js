import React from 'react';
import UserImgSm from '../hoc/UserImgSm';

const Notification = ({ upperStyleClass, image, content, date }) => {
  return (
    <div className="notification">
      <UserImgSm upperStyleClass={upperStyleClass} image={image} />
      <div className="notif-content">
        <div className="notif">{content}</div>
        <div className="notif-time">{date}</div>
      </div>
    </div>
  );
};
export default Notification;
