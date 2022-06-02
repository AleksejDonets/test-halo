import React from "react";
import  ReactDOM  from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({
	active, 
	setActive, 
	children
}) => {
	const activeTask = active ? styles.active : '';
	return ReactDOM.createPortal (

		<div className={`${styles.modal} ${activeTask} `} onClick={() => setActive(false)}>
			<div className={styles.modal_content}  onClick={e => e.stopPropagation() }>
				<div className={styles.modal__close}>
					<button 
						className={styles.modal__close_btn}  
						onClick={(e) => {e.preventDefault();setActive(false)}}
						title="Close popup"
					>
					</button>
				</div>
				{children}
			</div>
		</div>, document.getElementById('modal-root')
	)
}

export default Modal;