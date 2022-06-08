import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import goodsReducer from './slices/goodsSlice';
import { goodsApi } from '../services/goodsApi';

export const store = configureStore({
  reducer: {
	goods: goodsReducer,
  [goodsApi.reducerPath]: goodsApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(goodsApi.middleware)
});
