import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MODEL_OPEN, MODEL_CLOSE } from './action';

const Modal = ({ isOpen, name, text, close }) => {
	return (
		<div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
			<div className="modal-container">
				<h4>{name}</h4>
				<p>{text}</p>
				<button className="btn btn-primary" onClick={close}>
					close
				</button>
			</div>
		</div>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	close: PropTypes.func.isRequired
};

function mapStateToProps({ modalState: { isOpen, name, text } }) {
	return { isOpen: isOpen, name: name, text: text };
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		open: () => dispatch({ type: MODEL_OPEN }),
		close: () => dispatch({ type: MODEL_CLOSE })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
