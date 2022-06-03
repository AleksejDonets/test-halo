import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoodsAsync } from '../../store/slices/goodsSlice';
import Goods from "../../components/Goods/Goods";
import Modal from "../../components/Modal/Modal";
import {togglePopup,selectCheapest} from '../../store/slices/goodsSlice';
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import styles from './Main.module.scss';
import Button from "../../components/Button/Button";

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
	const buyCheapest = () => {
		dispatch(selectCheapest());
	}
	return(
		<div className={styles.container}>
			<div className={styles.goods_wrap}>
			{
				goods ? (
					goods.map(item => (
						<Goods key={item.name}  item={item} />
					))
				):(
					<h1>Loading...</h1>
				)
			}
			</div>
			<div className={styles.goods_cheapest}>
				<Button text='Buy cheapest' variant="success" onClick={buyCheapest}/>
			</div>
			<Modal active={activeModal} setActive={() => {dispatch(togglePopup(false))}} >
				<ShoppingCart item={selectedItem}/>
			</Modal>
		</div>
	)
}

export default Main