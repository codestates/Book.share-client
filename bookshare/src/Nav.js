import React, { useState } from 'react';

export default function Nav({ history, match }) {
	const [modalToggle, setModalToggle] = useState({ display: 'none' });
	const modalToggleHandler = () => {
		if (modalToggle.display === 'none') {
			setModalToggle({ display: 'flex' });
		} else {
			setModalToggle({ display: 'none' });
		}
	};
	const historyHandler = () => {
		if (history) {
			history.replace('/Main');
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
				<div className="modal" style={modalToggle}></div>
			</div>
		</>
	);
}
