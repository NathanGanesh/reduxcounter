import React from 'react';
import Counter from './Counter';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// reducers
import countReducer from './countReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer';
import thunk from 'redux-thunk';
// setup components
import Modal from './Modal';
import Products from './Products';
const middleware = [ thunk ];
// setup store
const store = createStore(
	combineReducers({
		countState: countReducer,
		productState: productReducer,
		modalState: modalReducer
	}),
	composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
	return (
		<Provider store={store}>
			<Counter />;
			<Modal />
			<Products />
		</Provider>
	);
};

export default App;
