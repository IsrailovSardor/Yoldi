import React from 'react'
import style from "./ProfilePhotos.module.scss";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto";
import CoverPhoto from "./components/BackgroundPhoto/CoverPhoto";
import { IUser } from "@/core/models/user";

interface IProfilePhotos {
  isOwner: boolean;
  userData?: IUser
}

const ProfilePhotos = ({ isOwner, userData }: IProfilePhotos) => {
  return (
    <div className={style.wrapper}>
      <CoverPhoto isOwner={isOwner} userData={userData} />
      <div className="container">
        <div className={style.userPhoto}>
          <ProfilePhoto isOwner={isOwner} userData={userData}/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePhotos;