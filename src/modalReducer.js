import { act } from 'react-dom/test-utils';
import { MODEL_OPEN, MODEL_CLOSE } from './action';

const defaultState = {
	name: '',
	text: '',
	isOpen: false
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case MODEL_OPEN:
			return { ...state, isOpen: true, name: action.payload.name, text: action.payload.text };
		case MODEL_CLOSE:
			return {
				...state,
				isOpen: false,
				name: '',
				text: ''
			};
		default:
			return state;
	}
}
