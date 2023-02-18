import React from 'react'
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

import style from "./Header.module.scss";

import Logo from "@/assets/icons/logo_wrapper.svg";
import Loading from "../Loading/Loading";
import { getUserData } from "@/core/api/getUserData";

const Header = () => {
  const { data: userData, isLoading } = useSWR("/profile", getUserData);

  return (
    <header className={style.header}>
      {
        isLoading && <Loading/>
      }
      <div className={style.container}>
        <div className={style.logo}>
          <Link href={"/"}>
            <Image src={Logo} width={80} height={50} alt="logo" />
          </Link>
          <p className={style.headerInform}>
            Разрабатываем и запускаем сложные веб проекты
          </p>
        </div>
        {
          userData?.name ?
            <div className={style.headerUser}>
              <p className={style.headerUserName}>{userData?.name}</p>
              <Link href={"/owner"} className={style.headerUserPhoto}>
                {userData?.image &&
                  <Image
                    alt="photo"
                    src={userData?.image?.url || ""}
                    width={50}
                    height={50} />
                }
                {userData ? userData.name[0] : ""}
              </Link>
            </div> :
            <Link href={"/sign-in"}>
              <button className={style.headerSignIn}>
                Войти
              </button>
            </Link>
        }
      </div>
    </header>
  )
}

export default Header