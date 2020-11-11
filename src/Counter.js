import React from 'react';
import { connect } from 'react-redux';
function Counter(props) {
	const [ count, setCount ] = React.useState(0);

	return (
		<div className="container">
			<h1>counter</h1>
			<p className="counter">{count}</p>
			<div className="buttons">
				<button type="button" className="btn" onClick={() => setCount(count - 1)}>
					decrease
				</button>
				<button type="button" className="btn" onClick={() => setCount(0)}>
					reset
				</button>
				<button type="button" className="btn" onClick={() => setCount(count + 1)}>
					increase
				</button>
			</div>
		</div>
	);
}
function mapStateToProps(state) {
	return { count: state.count };
}

export default connect(mapStateToProps)(Counter);
