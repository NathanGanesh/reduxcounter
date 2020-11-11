//count actions
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const RESET = 'RESET';
// modal actions
export const MODEL_OPEN = 'MODAL_OPEN';
export const MODEL_CLOSE = 'MODAL_CLOSE';
//product actions
export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCTS = 'GET_PRODUCTS';
//action creators
export const decrease = () => {
	return { type: DECREASE };
};
export const increase = () => {
	return { type: INCREASE };
};
export const reset = () => {
	return { type: RESET };
};
export const modalOpen = (name, text) => {
	return { type: MODEL_OPEN, payload: { name, text } };
};

export const setLoading = () => {
	return { type: SET_LOADING };
};

export const getProducts = () => {
	return async function(dispatch) {
		dispatch(setLoading());
		const response = await fetch('http://johnsmilgatutorials.com/projects/react-tech-store-v2/products');
		const data = await response.json();
		console.log(data);
		dispatch({ type: GET_PRODUCTS, payload: data });
	};
};
// export const getProducts = () =>async (dispatch) =>{

// }
