import React from 'react'
import { Form, Formik } from "formik";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";

import style from "./AuthModals.module.scss";

import Loading from "../Loading/Loading";
import { signInSchema } from "./component/utils";
import { InputPassword, SubmitButton, InputIcon } from "../Inputs/Inputs";
import { getUserData } from "../../core/api/getUserData";
import email from "@/assets/icons/inputMail.svg";
import password from "@/assets/icons/inputPassword.svg";
import onGetToken from "@/core/api/onGetToken";
import { ISignIn } from '@/core/models/user';


const SignInForm = () => {
  const { trigger: authTrigger, isMutating } = useSWRMutation("/auth/login/", onGetToken);
  const { trigger: userDataTrigger, isMutating: profileMutating } = useSWRMutation("/profile", getUserData)
  const router = useRouter()

  const onSignIn = async (data: ISignIn) => {
    const { value } = await authTrigger(data);
    if (value) {
      localStorage.setItem("token", value);
      router.push("/");
      userDataTrigger()
    }
  }

  return (
    <div className={style.auth}>
      {isMutating && <Loading />}
      {profileMutating && <Loading />}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnMount
        validateOnChange
        validationSchema={signInSchema}
        onSubmit={(values: ISignIn, { resetForm }) => {
          resetForm();
          onSignIn(values);
        }}
      >
        {({ isValid }) => (
          <Form className={style.authInner}>
            <h2 className={style.authTitle}>Вход в Yoldi Agency</h2>
            <InputIcon icon={email} type="email" name="email" placeholder="E-mail" />
            <InputPassword icon={password} type="password" name="password" placeholder="Пароль" />
            <SubmitButton isValid={isValid} title={"Войти"} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignInForm;