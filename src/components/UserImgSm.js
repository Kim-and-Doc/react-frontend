import React from 'react';

const UserImgSm = ({ upperStyleClass, image }) => {
  return (
    <div
      className={upperStyleClass}
      style={{
        'background-image': `url(${image})`,
        'background-position': '50% 50%',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
      }}
    ></div>
  );
};
export default UserImgSm;
