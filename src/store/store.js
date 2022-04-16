import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import goodsReducer from './slices/goodsSlice';

export const store = configureStore({
  reducer: {
	goods: goodsReducer
  },
});
