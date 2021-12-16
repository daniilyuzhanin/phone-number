import { createSlice } from '@reduxjs/toolkit';

export type ListType = {
  phone: string,
};

const initialState: ListType = {
  phone: '',
};


export const phoneSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhoneList: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPhoneList } = phoneSlice.actions;
export default phoneSlice.reducer;