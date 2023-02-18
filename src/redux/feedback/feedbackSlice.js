import { createSlice } from '@reduxjs/toolkit';
import { sendUserFeedback, getAllFeedback } from './feedbackOperations';

const initialState = {
  feedback: [],
  isLoading: false,
  error: null,
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendUserFeedback.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendUserFeedback.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(sendUserFeedback.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAllFeedback.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllFeedback.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.feedback = payload;
      })
      .addCase(getAllFeedback.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
