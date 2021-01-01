import React from 'react';

const FoodCommunitySideBar = () => {
  return (
    <div className="main-content-right-sidebar">
      <ul role="list" className="right-sidebar-list w-list-unstyled">
        <li className="list-item-upload">
          <a href="#" className="right-sidebar-upload-button w-button">Upload Posts</a>
        </li>
        <li className="list-item-snf-button">
          <a href="#" className="right-sidebar-mycontribution-button w-button">My SNF<br/>Contribution Button<br/></a>
        </li>
      </ul>
    </div>
  );
};
                              
export default FoodCommunitySideBar;