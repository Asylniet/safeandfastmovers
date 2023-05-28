import { configureStore } from '@reduxjs/toolkit';
import servicesSlice from './services/slice';
import medicineSlice from './medicine/slice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    medicine: medicineSlice,
  },
});

