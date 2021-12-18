import { configureStore } from '@reduxjs/toolkit';

import phone from './phone/phone-slice';


export const store = configureStore({
  reducer: {
    phone,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;