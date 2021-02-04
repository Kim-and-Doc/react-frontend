import React from 'react';
import UserImgSm from '../hoc/UserImgSm';

const CreateComment = () => {
  return (
    <div className="picture-post create-comment">
      <UserImgSm
        upperStyleClass="profile-img-div profile-small"
        image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
        altTxt="User Icon"
        styleClass="profile-image"
      />
      <form action="/search" className="text-input post-input w-form">
        <input
          type="search"
          className="search-input nav-search comment-field w-input"
          maxLength="256"
          name="query"
          placeholder="Write a comment..."
          id="search"
          required=""
        />
        <input type="submit" value="Search" className="input-submit w-button" />
      </form>
    </div>
  );
};
export default CreateComment;
