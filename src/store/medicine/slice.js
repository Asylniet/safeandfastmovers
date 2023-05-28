import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { medicineAPI } from '../../api/medicine';

const initialState = {
  searchValue: [],
  searchStatus: 'idle',
};

export const searchMedicine = createAsyncThunk('medicine/search', async (param) => {
  const response = await medicineAPI.search(param);
  return response.data;
});

export const medicineSlice = createSlice({
  name: 'medicine',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchMedicine.pending, state => {
        state.searchStatus = 'loading';
      });
    builder.addCase(searchMedicine.fulfilled, (state, action) => {
        state.searchStatus = 'idle';
        state.searchValue = action.payload;
    });
  },
});

export default medicineSlice.reducer;