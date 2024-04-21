import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Please enter your name")
    .min(2, "Min length 2 symbols")
    .max(32, "Max length 32 symbols")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",.<>?`~\-=_]+$/,
      "Use valid characters"
    ),
  password: yup
    .string()
    .required("Please enter a password")
    .min(7, "Min length 7 symbols")
    .max(7, "Max length 7 symbols")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "6 English letters and 1 number"
    )
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),

  email: yup
    .string()
    .required("Please enter an email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid email address"),
});
