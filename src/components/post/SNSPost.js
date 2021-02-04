import React from 'react';
import CommentThread from './CommentThread';
import UserImgSm from '../hoc/UserImgSm';
import PostSettings from './PostSettings';
import CreateComment from './CreateComment';

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
            <a href="/404" className="user-link w-inline-block">
              <div className="post-name">
                <strong className="bold-text header-font">Sooeun Kim</strong>
              </div>
            </a>
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
        <div
          className="post-media"
          style={{
            backgroundImage: `url(${'https://images7.alphacoders.com/465/thumb-1920-465099.jpg'})`,
          }}
        />
        <div className="post-count">
          <div className="like-count">Likes 69</div>
          <div className="count-spacer"> </div>
          <div className="comment-count">69 Comments</div>
        </div>
        <div className="hr"></div>
        <div className="post-react">
          <button className="clear-button post-interaction w-button">
            <i className="fas fa-thumbs-up" />
            <br />
            Like
          </button>
          <button className="clear-button post-interaction w-button">
            <i className="fas fa-comment" />
            <br />
            Comment
          </button>
          <button className="clear-button post-interaction w-button">
            <i className="fas fa-share" />
            <br />
            Share
          </button>
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
        <CreateComment />
      </div>
    </div>
  );
};
export default SNSPost;
