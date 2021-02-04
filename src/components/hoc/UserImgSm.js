import React from 'react';

const UserImgSm = ({ upperStyleClass, image, link }) => {
  return (
    <a
      className={upperStyleClass}
      style={{
        'backgroundImage': `url(${image})`,
        'backgroundPosition': '50% 50%',
        'backgroundSize': 'cover',
        'backgroundRepeat': 'no-repeat',
      }}
      href={link ? link : "/404"}
    ></a>
  );
};
export default UserImgSm;
