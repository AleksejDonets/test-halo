import React from "react";
import styles from './Goods.module.scss';
import Button from "../Button/Button";
import { selectGoods } from '../../store/slices/goodsSlice';
import { useDispatch } from "react-redux";
const Goods = ({item}) => {

	const {category, name, price} = item;
	const dispatch = useDispatch();
	return (
		<div className={styles.card_item}>
			<div className={styles.card_category}>
				<span>{category}</span>
			</div>
			<div className={styles.card_title}>
				<span>{name}</span>
			</div>
			<div className={styles.card_purchase_info}>
				<div className={styles.card_price}>
					<span>$</span><span>{price}</span>
				</div>
				<Button
					text={'Buy'}
					onClick={()=>{dispatch(selectGoods(item))}}
				/>
			</div>
		</div>
	)
}

export default Goods