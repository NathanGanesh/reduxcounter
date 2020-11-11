import React from 'react';
import { connect } from 'react-redux';
import { decrease, increase, reset, modalOpen } from './action';

function Counter({ name, count, increase, decrease, reset, modalOpen }) {
	return (
		<div className="container">
			<h1>counter</h1>
			<h2>{name}</h2>
			<p className="counter">{count}</p>
			<div className="buttons">
				<button type="button" className="btn" onClick={decrease}>
					decrease
				</button>
				<button
					type="button"
					className="btn"
					onClick={() => {
						reset();
						modalOpen(
							'susan',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, eligendi aperiam? Quis, pariatur animi. Ad eligendi at facilis veniam voluptates.'
						);
					}}
				>
					reset
				</button>
				<button type="button" className="btn" onClick={increase}>
					increase
				</button>
			</div>
		</div>
	);
}
function mapStateToProps({ countState: { count, name } }) {
	return { count: count, name: name };
}

const mapDispatchToProps = {
	increase,
	reset,
	decrease,
	modalOpen
};

// function mapDispatchToProps(dispatch, ownProps) {
// 	return {
// 		increase: () => dispatch(increase()),
// 		decrease: () => dispatch(decrease()),
// 		reset: () => {
// 			dispatch(reset());
// 			dispatch(
// 				modalOpen(
// 					'susan',
// 					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, eligendi aperiam? Quis, pariatur animi. Ad eligendi at facilis veniam voluptates.'
// 				)
// 			);
// 		}
// 	};
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
