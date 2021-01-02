import React from 'react';

const FoodCommunityPostThumbnail = () => {
  return (
    <div className="main-content-post-area">
      <div className="main-content-post-heading">
        <h1 className="grid-content-heading">Post Title</h1>
      </div>
      <div className="main-content-post-image"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" className="grid-thumbnail"/></div>
      <div className="main-content-post-description">
        <p className="main-content-post-list-description">Post Summary / Brief Description<br/>..<br/>..<br/>..<br/>..</p>
      </div>
      <div className="main-content-post-view-button">
        <a href="/404" className="main-content-post-list-view-button w-button">View Post</a>
      </div>
    </div>
  );
};
                              
export default FoodCommunityPostThumbnail;