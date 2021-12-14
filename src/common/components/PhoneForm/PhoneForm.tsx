import {
  Box,
  TextField,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';

import { CountrySelector } from 'common/components/PhoneForm/CountrySelector';
import { PhoneFormButton } from 'common/components/PhoneForm/PhoneFormButton';
import { validationSchema } from 'common/components/PhoneForm/PhoneFormValidationSchema';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 1rem',
  },
  wrapper: {
    padding: '2rem',
    minHeight: '20rem',
    width: '25.5rem',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    paddingBottom: '2rem',
  },
  button: {
    background: 'linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
  },
});

export const PhoneForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phone: '',
    },
    validationSchema,
    onSubmit: (values) => {},
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values: { phone: phoneValue },
    touched: { phone: isPhoneTouched },
    errors: { phone: phoneErrors },
  } = formik;

  const { container, title, wrapper } = classes;

  return (
    <Box 
      className={container}
      sx={{
        '& .MuiTextField-root': { mb: 3, width: '1' },
        }}
    >
      <Paper 
      elevation={10}
      className={wrapper}
      sx={{ borderRadius: '1rem' }}
      >
        <form
          onSubmit={handleSubmit}
          onBlur={handleBlur}
          onChange={handleChange}
          noValidate
        >
          <Box className={title}>
            Номер телефона
          </Box>

          <CountrySelector />

          <TextField
            onChange={handleBlur}
            type="number"
            fullWidth
            label='Phone Number'
            variant='outlined'
            name='phone'
            value={phoneValue}
            InputLabelProps={{
              shrink: true,
            }}
            error={isPhoneTouched && Boolean(phoneErrors)}
            helperText={isPhoneTouched && phoneErrors}
        />
          <PhoneFormButton />   
        </form>
      </Paper>
    </Box>
  );
};
