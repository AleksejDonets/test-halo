import React from "react"
import styles from './CustomInput.module.scss';

export const CustomInput = ({
	type,
	placeholder,
	validation,
	changeHandler,
	blurHanler,
}) => {

	let error = false;
	let errorText = '';
	for( const key in validation.validation){
		if(validation.validation[key].error){
			error = true;
			errorText = validation.validation[key].errorText;
			break;
		}
	}
	
	const classString = (!validation.isBlur && error) ? `${styles.input}` : (validation.isBlur && error)  ? `${styles.input} ${styles.input_error}` : `${styles.input} ${styles.input_success}`

	return (
		<>
			<input 
				value={validation.value}
				onChange={e => changeHandler(e)}
				onBlur={e => blurHanler(e) }
				type={type}
				placeholder={placeholder}
				className={classString}
			/>
			{

				(validation.isBlur && error) ? 
					<div className={styles.error}>{errorText}</div> 
					: <div className={styles.empty_error}></div>
			}
		</>
	)
}
