import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {GoodsModel} from '../../models/Goods.model';
const initialState = {
	goods:[],
	selectedGoods:{},
	openModal: false
}

export const fetchGoodsAsync = createAsyncThunk(
	'goods/fetchAll',
	async () => {
		const res = await GoodsModel.getGoods('b7d36eea-0b3f-414a-ba44-711b5f5e528e');
		return res
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
		togglePopup: (state, action) => {
			state.openModal = action.payload
		},
		selectCheapest: (state) => {
			state.selectedGoods = state.goods.sort((item, nextitem) => {
				return item.price - nextitem.price
			})[0];
			state.openModal = true;
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchGoodsAsync.fulfilled, (state, action) => {
			state.goods = [...action.payload]
		})
	}
});

export const { selectGoods,togglePopup,selectCheapest } = goodsSlice.actions;


export default goodsSlice.reducer

