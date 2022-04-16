import React from "react";
import styles from './Modal.module.scss';
const Modal = ({active, setActive, children}) => {
	const activeTask = active ? styles.active : '';
	return (
		<div className={`${styles.modal} ${activeTask} `} onClick={() => setActive(false)}>
			<div className={styles.modal_content}  onClick={e => e.stopPropagation() }>
				<div className={styles.modal__close}>
					<a href="#" className={styles.modal__close_btn}  onClick={(e) => {e.preventDefault();setActive(false)}}>
					</a>
				</div>
				{children}
			</div>
		</div>
	)
}

export default Modal;