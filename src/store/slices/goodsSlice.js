import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	goods:[],
	selectedGoods:{},
	openModal: false
}

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
});

export const { selectGoods,togglePopup,selectCheapest } = goodsSlice.actions;


export default goodsSlice.reducer

