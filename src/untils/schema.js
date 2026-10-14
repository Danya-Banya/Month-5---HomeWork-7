import * as yup from "yup";

export const schema = yup.object({
  text: yup
    .string()
    .required("Поле нужно заполнить!")
    .min(5, "Нужно больше 5 символов!")
    .max(255, "Максимальное значение 255 символов!"),
  status: yup.string().required("Заполните!").notOneOf([""]),
  date: yup.string().required("Заполните дату!"),
  status: yup
    .string()
    .required("Поле нужно заполнить!")
    .min(5, "Нужно больше 5 символов!")
    .max(255, "Максимальное значение 255 символов!"),
});
