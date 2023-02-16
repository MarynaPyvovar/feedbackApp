import { configureStore } from '@reduxjs/toolkit';

import { feedbackSlice } from './feedback/feedbackSlice';

export const store = configureStore({
  reducer: {
    feedback: feedbackSlice.reducer,
  },
});
