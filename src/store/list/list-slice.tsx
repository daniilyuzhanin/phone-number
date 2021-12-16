// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { PhoneState } from 'types/Phone';

// export type ListState = {
//   numbers: PhoneState,
// };

// const initialState: ListState = {
//   numbers: {
//     selector: '',
//     phone: '',
//   },
// };

// export const phoneSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setCategories: (state, action) => {
//       state.numbers = action.payload;
//     },
//   },
// });

// export const { setCategories } = phoneSlice.actions;
// export default phoneSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PhoneState } from 'types/Phone';

export type ListState = {
  numbers: PhoneState,
};

const initialState: PhoneState = {
  selector: '',
  phone: '',
};

export const phoneSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhoneList: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setPhoneList } = phoneSlice.actions;
export default phoneSlice.reducer;