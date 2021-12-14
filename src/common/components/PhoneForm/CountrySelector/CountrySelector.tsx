import { TextField, MenuItem } from '@mui/material';
import { useState } from 'react';


import { COUNTRY_OPTIONS } from 'common/constants';

export const CountrySelector = () => {
  const [currency, setCurrency] = useState('Россия');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField
      select
      label="Страна и код страны"
      value={currency}
      onChange={handleChange}
      defaultValue={currency}
    >
      {Object.values(COUNTRY_OPTIONS).map(({ name, selector, img }) => (
        <MenuItem key={name} value={name} selected >
          <img src={img} width="auto" height="15" alt="country" style={{ marginRight: '10px' }} />
          {name} {selector} 
        </MenuItem>
      ))}
    </TextField>
  );
}