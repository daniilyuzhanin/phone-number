import * as yup from 'yup';

export const validationSchema = yup.object({
  phone: yup
    .string()
    .required('We need your first name – it’s nicer that way')
    .matches(
      /^[0-9]{3,10}$/
      , 'Enter a valid name')
});
