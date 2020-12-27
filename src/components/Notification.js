import React from 'react';
import UserImgSm from './UserImgSm';

const Notification = ({
  upperStyleClass,
  image,
  altTxt,
  styleClass,
  content,
  date,
}) => {
  return (
    <div className="notification">
      <UserImgSm
        upperStyleClass={upperStyleClass}
        image={image}
      />
      <div className="notif-content">
        <div className="notif">{content}</div>
        <div className="notif-time">{date}</div>
      </div>
    </div>
  );
};
export default Notification;
