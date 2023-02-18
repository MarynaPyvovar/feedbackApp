import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { postFeedback, getFeedback } from '../../API/api';

export const sendUserFeedback = createAsyncThunk(
  'feedback',
  async (data, { rejectWithValue }) => {
    try {
      await postFeedback(data);
      toast.success('Your feedback successfully sent!');
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

export const getAllFeedback = createAsyncThunk(
  'getFeedback',
  async (data, { rejectWithValue }) => {
    try {
      const res = await getFeedback(data);
      return res;
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
