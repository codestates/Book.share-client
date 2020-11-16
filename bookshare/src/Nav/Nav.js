import React from 'react';
import Modal from './Modal';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav({ history, match, modalToggle, modalToggleHandler, modalOff }) {
	const historyHandler = () => {
		console.log(match);
		if (history) {
			console.log('history: ', history);
			history.replace('/main');
		}
	};

	return (
		<>
			<div className="logo" onClick={historyHandler}></div>
			<div className="nav">
				{match.url !== '/write' && (
					<button className="writingButton">
						<Link to={'/write'}>글쓰기</Link>
					</button>
				)}

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
