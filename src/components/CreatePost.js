import React from 'react';
import Button from './SNSButton';
import UserImgSm from './UserImgSm';

const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="post-component">
        <div className="picture-post">
          <UserImgSm
            upperStyleClass="profile-img-div profile-small"
            image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
            altTxt="User Icon"
            styleClass="profile-image"
          />
          <h3 className="heading header-font">Create A Post</h3>
          <div className="create-btn">
            <Button
              route="#"
              styleClass="create-post selected clear-button w-button"
              buttonText="SNS Post"
            />
            <Button
              route="#"
              styleClass="create-post clear-button food-btn w-button"
              buttonText="Food Post"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
