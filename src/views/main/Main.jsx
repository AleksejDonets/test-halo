import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Goods from "../../components/Goods/Goods";
import Modal from "../../components/Modal/Modal";
import {togglePopup,selectCheapest} from '../../store/slices/goodsSlice';
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import styles from './Main.module.scss';
import Button from "../../components/Button/Button";
import { useGetAllGoodsQuery } from '../../services/goodsApi';

const Main = () => {
	const activeModal = useSelector(state => state.goods.openModal);
	const selectedItem = useSelector( state => state.goods.selectedGoods);

  const {data: goods} = useGetAllGoodsQuery();
  const dispatch = useDispatch();

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