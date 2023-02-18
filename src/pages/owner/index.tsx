import React, { useState } from 'react'
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";

import style from "./owner.module.scss";

import ProfilePhotos from "@/components/ProfilePhotos/ProfilePhotos";
import pen from "@/assets/icons/profileIcons/pen_icon.svg";
import logout from "@/assets/icons/profileIcons/logout_icon.svg";
import EditProfile from "@/components/EditProfile/EditProfile";
import { getUserData } from "@/core/api/getUserData";


function Owner() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { data: userData, mutate } = useSWR("/profile", getUserData);
  const router = useRouter();

  const toggleEditModal = () => {
    setIsEdit(prev => !prev)
  }

  const onLogout = () => {
    localStorage.clear();
    mutate(getUserData("/profile"));
    router.push("/sign-in");
  }

  return (
    <div className={style.owner}>
      <ProfilePhotos isOwner={true} userData={userData} />
      <div className="container">
        <div className={style.ownerInner}>
          <div className={style.ownerInform}>
            <h2 className={style.ownerName}>{userData?.name}</h2>
            <a href="mailto:example@gmail.com" className={style.ownerEmail}>{userData?.email}</a>
          </div>
          <button className={style.ownerButton} onClick={toggleEditModal}>
            <Image src={pen} width={18} height={18} alt="edit" />
            Редактировать
          </button>
        </div>
        <p className={style.ownerDescription}>{userData?.description}</p>
        <button className={style.ownerButton} onClick={onLogout}>
          <Image src={logout} width={19} height={19} alt="logout" />
          Выйти
        </button>
      </div>
      {
        isEdit && <EditProfile userData={userData} toggleEditModal={toggleEditModal} />
      }
    </div>
  )
}

export default Owner;