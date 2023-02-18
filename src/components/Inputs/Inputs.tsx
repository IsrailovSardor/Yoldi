import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from 'react'
import Image from "next/image";

import style from "./Inputs.module.scss";

import visiblePassword from "@/assets/icons/visiblePassword.svg";
import { IInputIcon, ISubmitButton } from "@/core/models/user";


export const InputIcon = ({ icon, type, name, placeholder }: IInputIcon) => {
  return (
    <div className={style.wrapper}>
      <Field className={style.wrapperInput} name={name} type={type} placeholder={placeholder} />
      <Image src={icon} alt="icon" className={style.wrapperSvg} width={20} height={20} />
      <ErrorMessage className={style.errorMassage} name={name} component={"p"}></ErrorMessage>
    </div>
  )
}

export const InputPassword = ({ icon, type, name, placeholder }: IInputIcon) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeInputType = () => {
    setIsVisible(prev => !prev);
  }

  return (
    <div className={style.wrapper}>
      <Field className={style.wrapperInput} name={name} type={isVisible ? "text" : type} placeholder={placeholder} />
      <Image src={icon} alt="icon" className={style.wrapperSvg} width={20} height={20} />
      <Image
        onClick={changeInputType}
        src={visiblePassword}
        className={style.password}
        width={23}
        height={12}
        alt="password" />
      <ErrorMessage name={name} className={style.errorMassage} component={"p"}></ErrorMessage>
    </div>
  )
}

export const SubmitButton = ({ title, isValid }: ISubmitButton) => {
  return (
    <div className={style.wrapper}>
      <button className={style.button} type="submit" disabled={!isValid} >{title}</button>
    </div>
  )
}
