import * as Yup from "yup";
import "yup-phone";

const passwordRegex = /^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const numberRegex =
  /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;

export const useSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("required"),
  password: Yup.string()
    .min(8)
    .matches(passwordRegex, { message: "Please creat a strong password" })
    .required("required"),
  name: Yup.string().required("requires"),
  famillyname: Yup.string().required("requires"),
  phonenumber: Yup.number().required("required"),
});
