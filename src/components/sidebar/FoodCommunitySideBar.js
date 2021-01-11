import React from 'react';
import Button from '../hoc/SNSButton';

const FoodCommunitySideBar = () => {
  return (
    <div className="main-content-right-sidebar-area">
      <div className="main-content-right-sidebar-upload-button-area">
        <Button
          route="#"
          styleClass="right-sidebar-upload-button w-button"
          buttonText="Upload Post"
        />
      </div>
      <div className="main-content-right-sidebar-my-contribution-button-area">
        <a
          href="/404"
          className="right-sidebar-my-contribution-button w-button"
        >
          View My Post
        </a>
      </div>
      <div className="main-content-right-sidebar-filter-area">
        <a href="/404" className="right-sidebar-filter-box w-button">
          Filter??
        </a>
      </div>
    </div>
  );
};

export default FoodCommunitySideBar;
