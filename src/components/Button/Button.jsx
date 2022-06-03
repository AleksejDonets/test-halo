import React from "react";
import styles from './Button.module.scss';

const Button = ({
	text, 
	onClick, 
	title,
	disabled,
	variant,
	type,
	...rest
}) => {
	return (
		<button
			className={styles.button}
			onClick={onClick}
			title={title}
			variant={variant}
			disabled={disabled}
			type={type}
			{...rest}
		>
			{text}
		</button>
	)
}
export default Button