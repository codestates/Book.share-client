import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

export default function Nav({ cookie, history, match, modalToggle, modalToggleHandler, modalOff }) {
	const [hasCookieHandler, setHasCookieHandler] = useState({ display: 'none' });
	useEffect((e) => {
		console.log(e);
		if (cookie) {
			setHasCookieHandler({ display: 'block' });
		}
	}, []);
	const historyHandler = () => {
		if (history) {
			modalOff();

			history.replace('/main');
		}
	};
	console.log(cookie);

	return (
		<div className="nav">
			<div>
				<div className="logo" onClick={historyHandler}></div>
				</div>
			<div className="btn-nav">
				{match.url !== '/write' && (
					<button className="modalEventButton" style={hasCookieHandler} onClick={modalOff}>
						<Link to={'/write'}>글쓰기</Link>
					</button>
				)}

				<button className="modalEventButton" onClick={modalToggleHandler}>
					modal
				</button>

				<div className="modal" style={modalToggle}>
					<Modal modalOff={modalOff} />
				</div>
			</div>
		</div>
	);
}
