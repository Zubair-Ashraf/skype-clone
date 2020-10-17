import * as Yup from "yup";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string()
    .min(8, "This password is to short")
    .required("This field is required"),
});

const RegisterFormSchema = Yup.object().shape({
  username: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  password: Yup.string()
    .min(8, "This password is to short")
    .required("This field is required"),
});

const FormSchema = { LoginFormSchema, RegisterFormSchema };

export default FormSchema;
