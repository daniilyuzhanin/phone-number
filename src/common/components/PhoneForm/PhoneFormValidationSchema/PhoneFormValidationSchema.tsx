import * as yup from 'yup';

export const validationSchema = yup.object({
  phone: yup
    .string()
    .required('Пожалуйста, введите номер телефона')
    .matches(
      /^[0-9]{3,10}$/
      , 'Номер телефона должен содержать от трех до десяти цифр')
});
