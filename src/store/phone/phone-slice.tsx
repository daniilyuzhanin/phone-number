import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PhoneState = {
  selector: string;
  phone: string;
};

const initialState: PhoneState = {
  selector: '',
  phone: '',
};

export const phoneSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<PhoneState>) => {
      return action.payload;
    },
  },
});

export const { setPhone } = phoneSlice.actions;
export default phoneSlice.reducer;