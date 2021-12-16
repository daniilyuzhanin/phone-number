import { Box, TextField, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { getDatabase, ref, set, push } from "firebase/database";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { PhoneFormButton } from 'common/components/PhoneForm/PhoneFormButton';
import { validationSchema } from 'common/components/PhoneForm/PhoneFormValidationSchema';
import { Wrapper } from 'common/components/Wrapper';
import { COUNTRY_OPTIONS } from 'constants/country-options';
import { setPhone } from 'store/phone/phone-slice';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    paddingBottom: '2rem',
  },
});

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles(); 


  const database = getDatabase();

  const postListRef = push(ref(database, 'phoneNumber'));

  const formik = useFormik({
    initialValues: {
      selector: '+7',
      phone: '',
    },
    validationSchema,
    onSubmit: (data) => {
      dispatch(setPhone(data));
      set(postListRef, data );
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values: { phone: phoneValue, selector: phoneSelector },
    touched: { phone: isPhoneTouched },
    errors: { phone: phoneErrors },
  } = formik;

  const { title } = classes;

  return (
    <Wrapper>

        <form
          onSubmit={handleSubmit}
          onBlur={handleBlur}
          onChange={handleChange}
          noValidate
        >

          <Box className={title}>
            Номер телефона
          </Box>

          <TextField
            select 
            label="Страна и код страны"
            onChange={handleChange}
            value={phoneSelector}
            inputProps={{
              name: 'selector',
              id: 'countrySelector',
            }}
          >
            {Object.values(COUNTRY_OPTIONS).map(({ name, selector, img }) => (
              <MenuItem key={name} value={selector} selected id={name} >
                <img src={img} width="auto" height="15" alt="country" style={{ marginRight: '10px' }} />
                {name} {selector} 
              </MenuItem>
            ))}
          </TextField>

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
    </Wrapper>
  );
};