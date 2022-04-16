import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GoodsServices from '../../services/goodsServices';

const initialState = {
	goods:[],
	selectedGoods:{},
	openModal: false
}

export const fetchGoodsAsync = createAsyncThunk(
	'goods/fetchAll',
	async () => {
		const res = await GoodsServices.fetchAll();
		return res.data
	}
);

export const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		selectGoods:(state, action) => {
			state.selectedGoods = Object.assign({}, action.payload);
			state.openModal = true;
		},
		closePopup: (state, action) => {
			state.openModal = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchGoodsAsync.fulfilled, (state, action) => {
			state.goods = [...action.payload]
		})
	}
});

export const { selectGoods,closePopup } = goodsSlice.actions;


export default goodsSlice.reducer

