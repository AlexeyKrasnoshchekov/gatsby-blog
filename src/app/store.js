import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../components/apiImage/bgImageSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer
  },
});