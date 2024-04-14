import * as yup from "yup";

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegexp = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Error email"),
  password: yup
    .string()
    .required("Field is required")
    .matches(passwordRegexp, "Error password"),
});
