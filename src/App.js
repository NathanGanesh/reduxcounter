import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import reducer from './reducers';
import { DECREASE, INCREASE, RESET } from './action';
import { Provider } from 'react-redux';

const defaultState = {
	count: 73,
	name: 'hey'
};

const store = createStore(reducer, defaultState);

const App = () => {
	return (
		<Provider store={store}>
			<Counter />;
		</Provider>
	);
};

export default App;
