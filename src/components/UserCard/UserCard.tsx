import Image from "next/image";
import Link from "next/link";
import React from 'react';

import style from "./UserCard.module.scss";

import { IUser } from "@/core/models/user";


interface IUserCardProps {
  userData: IUser
}

const UserCard = ({ userData }: IUserCardProps) => {
  return (
    <div className={style.user}>
      <div className={style.userPhoto}>
        {userData.image !== null &&
          <Image
            alt="photo"
            src={userData.image?.url || ""}
            width={50}
            height={50} />
        }
        {userData.name[0]}
      </div>
      <div className={style.userInform}>
        <Link href={`/user/${userData.slug}`} className={style.userName}>{userData.name}  </Link>
        <a href={`mailto:{userData.email}`} target="blank" className={style.userEmail}>{userData.email}</a>
      </div>
    </div>
  )
}

export default UserCard;