import React from 'react';
import CommentThread from './CommentThread';
import UserImgSm from '../hoc/UserImgSm';
import PostSettings from './PostSettings';

const SNSPost = () => {
  return (
    <div className="post">
      <div className="post-component post">
        <div className="picture-details">
          <UserImgSm
            upperStyleClass="profile-img-div profile-small"
            image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
            altTxt="User Icon"
            styleClass="profile-image"
          />
          <div className="post-details">
            <div className="post-name">
              <strong className="bold-text header-font">Sooeun Kim</strong>
            </div>
            <div className="post-date">October 28, 2020</div>
          </div>
          <PostSettings />
        </div>
        <div className="hr"></div>
        <div className="post-text">
          THis
          <br />
          is
          <br />
          where the text
          <br />
          goes.‍
          <br />
          This‍
        </div>
        <div className="post-media" style={{
        'backgroundImage': `url(${
          "https://images7.alphacoders.com/465/thumb-1920-465099.jpg"
          })`,
      }} />
        <div className="post-count">
          <div className="like-count">Likes 69</div>
          <div className="count-spacer"> </div>
          <div className="comment-count">69 Comments</div>
        </div>
        <div className="hr"></div>
        <div className="post-react">
          <a href="/404" className="clear-button post-interaction w-button">
            <i className="fas fa-thumbs-up" />
            <br />
            Like
          </a>
          <a href="/404" className="clear-button post-interaction w-button">
            <i className="fas fa-comment" />
            <br />
            Comment
          </a>
          <a href="/404" className="clear-button post-interaction w-button">
            <i className="fas fa-share" />
            <br />
            Share
          </a>
        </div>
        <div className="hr"></div>
        <CommentThread
          upperStyleClass="profile-img-div profile-small comment-pic"
          image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
          altTxt="User Icon"
          styleClass="profile-image"
          username="Sooeun Kim"
          commentContent="Basic commentasdf df asdfasd fadsfad
                  fadsfasdfasdfadsfdsfdasfdsfasdfdasfkl jknknjnjnk knkjnj knk
                  kjnkjn njlkklklkmkllkklmklmkl kmlkmlmklmlkmlkm
                  klmlkmlmkmlkmlkmlk mlkmlmmlkmlkml lmlmlkmlkmlkmlkmlmlmm
                  lkmlkmlmlkm"
          commentDate="mm-dd-yyyy"
        >
          <CommentThread
            upperStyleClass="profile-img-div profile-small comment-pic"
            image="https://www.thefamouspeople.com/profiles/images/bae-suzy-2.jpg"
            altTxt="User Icon"
            styleClass="profile-image"
            username="Suzy Bae"
            commentContent="I am replying"
            commentDate="mm-dd-yyyy"
          >
            <CommentThread
              upperStyleClass="profile-img-div profile-small comment-pic"
              image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
              altTxt="User Icon"
              styleClass="profile-image"
              username="Sooeun Kim"
              commentContent="Basic commentasdf df asdfasd fadsfad
                  fadsfasdfasdfadsfdsfdasfdsfasdfdasfkl jknknjnjnk knkjnj knk
                  kjnkjn njlkklklkmkllkklmklmkl kmlkmlmklmlkmlkm
                  klmlkmlmkmlkmlkmlk mlkmlmmlkmlkml lmlmlkmlkmlkmlkmlmlmm
                  lkmlkmlmlkm"
              commentDate="mm-dd-yyyy"
            ></CommentThread>
          </CommentThread>
        </CommentThread>
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
            <input
              type="submit"
              value="Search"
              className="input-submit w-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SNSPost;
