import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoodsAsync } from '../../store/slices/goodsSlice';
import Goods from "../../components/Goods/Goods";
import Modal from "../../components/Modal/Modal";
import {closePopup} from '../../store/slices/goodsSlice';
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import styles from './Main.module.scss';

const Main = () => {
	const goods = useSelector(state => state.goods.goods);
	const activeModal = useSelector(state => state.goods.openModal);
	const selectedItem = useSelector( state => state.goods.selectedGoods);

	const dispatch = useDispatch();

	const fetchAll = useCallback(() => {
		dispatch(fetchGoodsAsync())
	},[dispatch])

	useEffect(()=>{
		fetchAll()
	},[fetchAll])
	// const goods = [
	// 	{
	// 		name: 'Item 1',
	// 		price: '1.99',
	// 		category: 'cat_1'
	// 	},
	// 	{
	// 		name: 'Item 2',
	// 		price: '2.99',
	// 		category: 'cat_2'
	// 	},
	// 	{
	// 		name: 'Item 1',
	// 		price: '1.99',
	// 		category: 'cat_1'
	// 	},
	// 	{
	// 		name: 'Item 1',
	// 		price: '1.99',
	// 		category: 'cat_1'
	// 	},	
	// 	{
	// 		name: 'Item 1',
	// 		price: '2.99',
	// 		category:'cat_2'
	// 	},
	// 	{
	// 		name: 'Item 1',
	// 		price: '1.99',
	// 		category: 'cat_1'
	// 	}
	// ]

	return(
		<div className={styles.container}>
			<div className={styles.goods_wrap}>
			{
				goods ? (
					goods.map(item => (
						<Goods key={item.name}  item={item} />
					))
				):(
					<h1>Loading</h1>
				)
			}
			</div>
			<Modal active={activeModal} setActive={() => {dispatch(closePopup(false))}}>
				<ShoppingCart item={selectedItem}/>
			</Modal>
		</div>
	)
}

export default Main