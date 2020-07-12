import { useState } from 'react';

export const useContador = (initialState = 1) => {

	const [contador, setContador] = useState(initialState);

	const increment = () => {
		setContador(contador + 1);
	};

	const decrement = () => {
		setContador(contador - 1);
	};
	
	const reset = () => { setContador(initialState) };

	// También puede retornar [], eso depende del uso deseado.
	return {
		contador,
		increment,
		decrement,
		reset
	};
}