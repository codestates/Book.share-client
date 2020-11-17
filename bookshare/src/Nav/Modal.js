import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Modal({ match, modalOff }) {
	const [userEmail, setUserEmail] = useState('');
	useEffect(() => {
		axios.get(`http://localhost:8080/user/info`).then((res) => setUserEmail(res.data.email));
	}, []);

	const logoutHandler = async () => {
		await axios.post('http://localhost:8080/user/logout').then((res) => console.log(res));
	};

	return (
		<div className="modalWrapper">
			<div className="userInfo">
				<span className="userEmail">{userEmail}</span>
				<button className="userInfoBtn" onClick={modalOff}>
					<Link to={'/main/userInfo'}>userInfo</Link>
				</button>
			</div>
			<div className="logout">
				<button className="logoutBtn" onClick={logoutHandler}>
					<Link to={'/'}>logout</Link>
				</button>
			</div>
		</div>
	);
}
