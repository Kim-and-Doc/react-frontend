import React from 'react'
import UserImgSm from './UserImgSm';

const ProfileBanner = () => {
    return (
        <div className="profile-banner" style={{"background-image": `url("https://upload.wikimedia.org/wikipedia/commons/5/57/Calgary_banner_Panorama.jpg")`}}>
        <UserImgSm
            upperStyleClass="profile-img-div"
            image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
          />
        <div className="profile-name">
          <div className="name">
            <div className="name-txt first header-font">Sooeun</div>
            <div className="name-txt last header-font">Kim</div>
          </div>
        </div>
      </div>
    )
}
export default ProfileBanner;