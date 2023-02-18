import * as Yup from "yup";
export const editSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  slug: Yup.string()
  .required("Обязательное поле"),
  description: Yup.string().required("Обязательное поле")
})