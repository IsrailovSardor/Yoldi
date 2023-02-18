import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

import style from "./Footer.module.scss";


const Footer = () => {
  const { pathname } = useRouter();
  
  return (
    <footer className={style.footer}>
      {
        pathname === "/sign-up" ?
          <div className={style.footerInner}>
            Уже есть аккаунт?
            <Link className={style.footerLink} href={"/sign-in"}> Войти</Link>
          </div> :
          <div className={style.footerInner}>
            Еще нет аккаунта?
            <Link className={style.footerLink} href={"/sign-up"}> Зарегистрироваться</Link>
          </div>
      }
    </footer>
  )
}

export default Footer;
