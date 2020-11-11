import React from 'react';
import { connect } from 'react-redux';
import { DECREASE, INCREASE, RESET } from './action';

function Counter(props) {
	const [ count, setCount ] = React.useState(0);

	return (
		<div className="container">
			<h1>counter</h1>
			<h2>{props.name}</h2>
			<p className="counter">{props.count}</p>
			<div className="buttons">
				<button type="button" className="btn" onClick={() => props.dispatch({ type: DECREASE })}>
					decrease
				</button>
				<button type="button" className="btn" onClick={() => props.dispatch({ type: RESET })}>
					reset
				</button>
				<button type="button" className="btn" onClick={() => props.dispatch({ type: INCREASE })}>
					increase
				</button>
			</div>
		</div>
	);
}
function mapStateToProps(state) {
	return { count: state.count, name: state.name };
}

export default connect(mapStateToProps)(Counter);
