import { createSlice } from '@reduxjs/toolkit';

import { PhoneType } from 'types/Phone';

export type ListType = {
  numbers: PhoneType,
};

const initialState: ListType = {
  numbers: {
    selector: '',
    phone: '',
  },
};

export const phoneSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhoneList: (state, action) => {
      state.numbers = action.payload;
    },
  },
});

export const { setPhoneList } = phoneSlice.actions;
export default phoneSlice.reducer;