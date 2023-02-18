import React from 'react'
import useSWR from "swr";
import { useRouter } from "next/router";

import style from "./user.module.scss"

import ProfilePhotos from "@/components/ProfilePhotos/ProfilePhotos";
import { getUserData } from "@/core/api/getUserData";


const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query
  const { data: userData } = useSWR(`/user/${id}`, getUserData);

  return (
    <div className={style.userProfile}>
      <ProfilePhotos isOwner={false}  userData={userData}/>
      <div className="container">
        <h2 className={style.userProfileName}>{userData?.name}</h2>
        <a href="mailto:example@gmail.com" className={style.userProfileEmail}>{userData?.email}</a>
        <p className={style.userProfileDescription}>{ userData?.description }</p>
      </div>
    </div >
  )
}

export default UserProfile;