import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
	reducerPath:'goodsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://run.mocky.io/v3/'
	}),
  endpoints: (builder) => ({
    getAllGoods: builder.query({
      query: () => 'b7d36eea-0b3f-414a-ba44-711b5f5e528e'
    })
  })
});

export const {useGetAllGoodsQuery} = goodsApi;