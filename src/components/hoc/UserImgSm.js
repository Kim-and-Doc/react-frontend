import React from 'react';

const UserImgSm = ({ upperStyleClass, image }) => {
  return (
    <div
      className={upperStyleClass}
      style={{
        'backgroundImage': `url(${image})`,
        'backgroundPosition': '50% 50%',
        'backgroundSize': 'cover',
        'backgroundRepeat': 'no-repeat',
      }}
    ></div>
  );
};
export default UserImgSm;
