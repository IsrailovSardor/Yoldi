import { Formik, } from "formik";
import React from 'react'
import { useSWRConfig } from "swr";

import style from "./EditProfile.module.scss";

import { IEditForm, IEditProfileProps } from "@/core/models/user";
import EditProfileForm from "./components/EditProfileForm/EditProfileForm";
import { editSchema } from "./components/validatingSchema";
import { editUserProfile } from "../../core/api/editUserProfile";


const EditProfile = ({ toggleEditModal, userData }: IEditProfileProps) => {
  const { mutate } = useSWRConfig();

  const onEditProfile = async (data: IEditForm) => {
    toggleEditModal();
    mutate("/profile", editUserProfile(data));
  }

  return (
    <div className={style.editProfile}>
      <div className={style.editProfileBack} onClick={toggleEditModal}></div>
      <Formik
        initialValues={{
          name: userData?.name || "",
          description: userData?.description || "",
          slug: userData?.slug || ""
        }}
        validateOnMount
        validateOnChange
        validationSchema={editSchema}
        onSubmit={(values: IEditForm, { resetForm }) => {
          onEditProfile(values);
          resetForm();
        }}
      >
        {({ isValid, resetForm }) => (
          <EditProfileForm isValid={isValid} resetForm={resetForm} toggleEditModal={toggleEditModal} />
        )}
      </Formik>
    </div>
  )
}

export default EditProfile;