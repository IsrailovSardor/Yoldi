import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
  .required("Обязательное поле")
  .email("Введите правильный адрес"),
  password: Yup.string().min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
})

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  email: Yup.string()
  .required("Обязательное поле")
  .email("Введите правильный адрес"),
  password: Yup.string().min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
})