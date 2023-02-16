import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { postFeedback } from '../../API/api';

export const sendUserFeedback = createAsyncThunk(
  'feedback',
  async (data, { rejectWithValue }) => {
    try {
      const result = await postFeedback(data);
      toast.success('Successfully sent!');
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(`Oops! ${response.data.message}, please, try again`);
      return rejectWithValue(error);
    }
  }
);
