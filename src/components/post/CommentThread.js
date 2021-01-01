import React from 'react';
import UserImgSm from '../hoc/UserImgSm';

const CommentThread = ({
  children,
  username,
  commentContent,
  commentDate,
  upperStyleClass,
  image,
  altTxt,
  styleClass,
}) => {
  return (
    <div className="comment-section">
      <div className="comment-container">
        <UserImgSm
          upperStyleClass={upperStyleClass}
          image={image}
          altTxt={altTxt}
          styleClass={styleClass}
        />
        <div className="comment">
          <div className="comment-box">
            <div className="comment-name header-font">{username}</div>
            <div className="comment-text">{commentContent}</div>
          </div>
          <div className="comment-react">
            <a href="/404" className="like-comment">
              Like{' '}
            </a>
            <a href="/404" className="reply-comment">
              Reply{' '}
            </a>
            <div className="text-block-2">{commentDate}</div>
          </div>
        </div>
      </div>
      <div className="replies">{children}</div>
    </div>
  );
};
export default CommentThread;
