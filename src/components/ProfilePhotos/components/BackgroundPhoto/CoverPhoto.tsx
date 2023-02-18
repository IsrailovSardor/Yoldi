import React, { useState } from 'react'
import Image from "next/image";

import style from "./CoverPhoto.module.scss";

import { EditCover } from "../EditPhoto/EditPhoto";
import { IUser } from "@/core/models/user";

interface IProps {
  isOwner: boolean;
  userData?: IUser;
}

const CoverPhoto = ({ isOwner, userData }: IProps) => {
  return (
    <div className={style.wrapper}>
      {
        userData?.cover &&
        <Image src={userData.cover.url} className={style.coverImage} width={+userData.cover.width} height={+userData.cover.height} alt="cover" />
      }
      {
        isOwner &&
        <div className={style.coverPhotoBtn}>
          <EditCover />
        </div>
      }
    </div >
  )
}

export default CoverPhoto