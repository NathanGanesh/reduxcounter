import { DECREASE, INCREASE, RESET } from './action';

export default function reducer(state, action) {
	switch (action.type) {
		case DECREASE:
			return { ...state, count: state.count - 1 };
		case RESET:
			return { ...state, count: 0 };
		case INCREASE:
			return { ...state, count: state.count + 1 };
		default:
			return state;
	}
}
