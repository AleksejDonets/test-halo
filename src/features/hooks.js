import { useState,useEffect } from "react"

const useValidation = (value, rules) => {
	
	const [isEmpty, setEmpty] = useState({
		error: true,
		errorText: ''
	});
	const [lettersError, setLettersError] = useState({
		error: false,
		errorText: ''
	});
	const [phoneError, setPhoneError] = useState({
		error: false,
		errorText: ''
	});
	const [lengthError, setLengthError] = useState({
		error: false,
		errorText: ''
	});
	const [minLengthError, setMinLengthError] = useState(false);

	const [validInput, setValidInput] = useState(false);

	useEffect(() => {
		for(const ruls in rules) {
			switch(ruls){
				case 'minLength': 
					value.length  < rules[ruls] ? setMinLengthError(true) : setMinLengthError(false)
					break;
				case 'length':
					value.length !== rules[ruls] ? setLengthError({
						error: true,
						errorText: `Should contain ${rules[ruls]} characters`
					}): setLengthError({
						error: false,
						errorText: ''
					})
					break;
				case 'isEmpty': 
					value ? setEmpty(
						{ 
							error: false, 
							errorText: ''
						}) : setEmpty(
							{
								error: true,
								errorText: 'This field in required'

							}
						)
					break;
				case 'onlyLetters':
					const reg = /^[a-zа-яёЁЇїІіЄєҐґ]+$/i;
					reg.test(String(value)) ? 
					setLettersError({
						error: false,
						errorText: ''
					}): setLettersError({
						error: true,
						errorText: 'Only letters allowed'
					})
					break;
				case 'phoneFormat': 
					const regPhone = /^\d{12}$/;
					regPhone.test(String(value)) ? 
					setPhoneError({
						error: false,
						errorText: ''
					}):
					setPhoneError({
						error: true,
						errorText: 'Only numbers allowed'
					})
					break;
				default:
					break;
			}
		}
	
	}, [value]);

	useEffect(()=>{
		if(isEmpty.error || lettersError.error || phoneError.error || lengthError.error || minLengthError.error){
			setValidInput(false)
		}else{
			setValidInput(true)
		}
	},[isEmpty, lettersError, phoneError,lengthError, minLengthError])

	return {
		isEmpty,
		minLengthError,
		lettersError,
		lengthError,
		phoneError,
		validInput
	}
	
}

export const useInput = (initValue, rulesValidation) => {
	const [value, setValue] = useState(initValue);
	const [isBlur, setBlur] = useState(false);
	const valid = useValidation(value, rulesValidation)
	const onChange = (e) => {
		setValue(e.target.value);
	}

	const onBlur = (e) => {
		setBlur(true);
	}

	const onClose = (e) => {
		setValue('');
		setBlur(false)
	}
	return {
		value,
		onChange,
		onBlur,
		onClose,
		isBlur,
		validation:{...valid}
	}
}
