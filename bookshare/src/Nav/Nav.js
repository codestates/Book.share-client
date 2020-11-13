import React from 'react';
import Modal from './Modal';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav({ history, match, modalToggle, modalToggleHandler, modalOff }) {
	const historyHandler = () => {
		if (history) {
			console.log('history: ', history);
			history.replace('/main');
		}
	};

	return (
		<>
			<div className="logo" onClick={historyHandler}></div>
			<div className="nav">
				<button className="writingButton">글쓰기</button>
				<button className="writingButton" onClick={modalToggleHandler}>
					modal
				</button>

				<div className="modal" style={modalToggle}>
					<Modal modalOff={modalOff} />
				</div>
			</div>
		</>
	);
}
