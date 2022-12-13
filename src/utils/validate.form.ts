import * as yup from "yup";

export const ValidateLogin = yup.object().shape({
  email: yup.string().trim().email().required("email is required"),
  password: yup.string().trim().required("password is required"),
});
