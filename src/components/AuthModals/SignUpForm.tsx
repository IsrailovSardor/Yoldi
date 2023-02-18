import React from 'react'
import { Form, Formik } from "formik";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";

import style from "./AuthModals.module.scss";

import email from "@/assets/icons/inputMail.svg";
import password from "@/assets/icons/inputPassword.svg";
import name from "@/assets/icons/inputPerson.svg";
import onGetToken from "@/core/api/onGetToken";
import Loading from "../Loading/Loading";
import { signUpSchema } from "./component/utils";
import { InputIcon, InputPassword, SubmitButton } from "../Inputs/Inputs";
import { getUserData } from "@/core/api/getUserData";
import { ISignUp } from "@/core/models/user";


const SignUpForm = () => {
  const { trigger: signUpTrigger, isMutating } = useSWRMutation("/auth/sign-up/", onGetToken);
  const { trigger: userDataTrigger, isMutating: profileMutating } = useSWRMutation("/profile", getUserData)
  const router = useRouter()

  const onSignUp = async (data: ISignUp) => {
    const { value } = await signUpTrigger(data);
    if (value) {
      localStorage.setItem("token", value);
      userDataTrigger()
      router.push("/");
    }
  }

  return (
    <div className={style.auth}>
      {isMutating && <Loading />}
      {profileMutating && <Loading />}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validateOnMount
        validateOnChange
        validationSchema={signUpSchema}
        onSubmit={(values: ISignUp, { resetForm }) => {
          onSignUp(values);
        }}
      >
        {({ isValid }) => (
          <Form className={style.authInner}>
            <h2 className={style.authTitle}>Регистрация в Yoldi Agency</h2>
            <InputIcon icon={name} type="text" placeholder="Имя" name="name" />
            <InputIcon icon={email} type="email" name="email" placeholder="E-mail" />
            <InputPassword icon={password} type="password" name="password" placeholder="Пароль" />
            <SubmitButton isValid={isValid} title={"Создать аккаунт"} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignUpForm;