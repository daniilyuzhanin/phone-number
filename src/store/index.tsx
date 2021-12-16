import { configureStore } from '@reduxjs/toolkit';

import list from './list/list-slice';
import phone from './phone/phone-slice';


export const store = configureStore({
  reducer: {
    phone,
    list,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;