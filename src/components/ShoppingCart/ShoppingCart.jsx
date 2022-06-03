import React, {useRef} from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { useInput } from "../../features/hooks";
import { CustomInput } from "../CustomInput/CustomInput";
import {togglePopup} from '../../store/slices/goodsSlice';
import styles from './ShoppingCart.module.scss';

export const ShoppingCart = ({
	item
}) => {
	const form = useRef(null);

	const dispatch = useDispatch();
	const {name, category, price} = item;
	const nameInput = useInput('', { 
		isEmpty: true, 
		onlyLetters: true 
	});
	const phoneInput = useInput('', {
		isEmpty: true,
		phoneFormat: true,
		length: 12,
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = {
			item: item,
			name:nameInput.value,
			phone: phoneInput.value
		};
		localStorage.setItem('order', JSON.stringify(formData));
		phoneInput.onClose();
		nameInput.onClose();
		dispatch(togglePopup(false));
		
	}
	return (
		<form onSubmit={handleSubmit} ref={form}>
			<div className={styles.item_wrap}>
				<div 
					className={styles.item_category}>
						<span>{category}</span>
				</div>

				<div className={styles.item_title}>
					<span>{name}</span>
				</div>
				<div className={styles.item_price}>
					<span>$</span><span>{price}</span>
				</div>
				<div className={styles.form}>
					<CustomInput 
						type="text"
						placeholder="Name"
						validation={nameInput}
						changeHandler={nameInput.onChange}
						blurHanler={nameInput.onBlur}
					/>
					<CustomInput 
						type="text"
						placeholder="Phone number"
						validation={phoneInput}
						changeHandler={phoneInput.onChange}
						blurHanler={phoneInput.onBlur}
					/>
				</div>
				<div className={styles.send_btn}>
					<Button 
						variant='success'
						title="Send order"
						text='Order'
						type="submit"
						disabled={!nameInput.validation.validInput || !phoneInput.validation.validInput }
					/>
					
				</div>
			</div>
		</form>
	)
}