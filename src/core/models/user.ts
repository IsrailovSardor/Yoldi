export interface IImage {
  id: string,
  url: string,
  width: string,
  height: string
}

export interface IUser {
  name: string,
  email: string,
  description?: string,
  slug: string,
  image: IImage | null, 
  cover: IImage | null,
}

export interface ISignIn {
  email: string,
  password: string
}
export interface ISignUp {
  name: string
  email: string,
  password: string
}
export interface IEditFormProps {
  isValid: boolean
  resetForm: () => void
  toggleEditModal: () => void
}

export interface IEditForm {
  name: string,
  description: string,
  slug: string
}

export interface IEditProfileProps {
  toggleEditModal: () => void
  userData?: IUser
}

export interface IInputIcon {
  icon: string
  type: string
  name: string
  placeholder: string
}

export interface ISubmitButton {
  title: string
  isValid: boolean
}

export interface IArguments {
  type: string,
  text: string
}

export interface ISignUpArg {
  arg: {
    name?: string
    password: string
    email: string
  }
}
