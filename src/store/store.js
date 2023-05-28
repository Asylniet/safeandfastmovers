import { configureStore } from '@reduxjs/toolkit';
import servicesSlice from './services/slice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
  },
});

