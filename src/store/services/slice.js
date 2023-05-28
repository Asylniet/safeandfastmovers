import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getServices } from '../../api/services';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchServices = createAsyncThunk('services/get', async () => {
  const response = await getServices();
  return response;
});

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchServices.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export default servicesSlice.reducer;