import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PhoneType } from 'types/Phone';

const initialState: PhoneType = {
  selector: '',
  phone: '',
};

export const phoneSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<PhoneType>) => {
      return action.payload;
    },
  },
});

export const { setPhone } = phoneSlice.actions;
export default phoneSlice.reducer;