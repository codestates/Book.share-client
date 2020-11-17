import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserInfo.css';

export default function UserInfo({ history, match, modalOff }) {
	const [infoModify, setInfoModify] = useState({
		id: false,
		password: false,
		email: false,
		currentId: '',
		currentPassword: '',
		currentEmail: '',
		inputId: '',
		inputPassword: '',
		inputEmail: '',
	});

	useEffect(() => {
		axios.get('http://localhost:8080/user/info').then((res) => {
			//'http://localhost:8080/user/info'
			const { data } = res;
			setInfoModify(Object.assign({}, infoModify, { currentId: data.username, currentPassword: data.password, currentEmail: data.email }));
		});
	}, [infoModify.currentId, infoModify.currentPassword, infoModify.currentEmail]);

	const infoModifyHandler = (e) => {
		if (e.target.className === 'modifyIdBtn') {
			axios.post('http://localhost:8080/user/changeInfo', {
				username: infoModify.inputId,
			});
			setInfoModify((prev) => {
				return Object.assign({}, infoModify, { id: !prev.id, inputId: '' });
			});
		} else if (e.target.className === 'modifyPasswordBtn') {
			axios.post('http://localhost:8080/user/changeInfo', {
				password: infoModify.inputPassword,
			});
			setInfoModify((prev) => {
				return Object.assign({}, infoModify, { password: !prev.password, inputPassword: '' });
			});
		} else if (e.target.className === 'modifyEmailBtn') {
			axios.post('http://localhost:8080/user/changeInfo', {
				email: infoModify.inputEmail,
			});
			setInfoModify((prev) => {
				return Object.assign({}, infoModify, { email: !prev.email, inputEmail: '' });
			});
		}
	};

	const inputModifyChange = (e) => {
		if (e.target.id === 'inputModifyId') {
			setInfoModify(Object.assign({}, infoModify, { inputId: e.target.value }));
		} else if (e.target.id === 'inputModifyPassword') {
			setInfoModify(Object.assign({}, infoModify, { inputPassword: e.target.value }));
		} else if (e.target.id === 'inputModifyEmail') {
			setInfoModify(Object.assign({}, infoModify, { inputEmail: e.target.value }));
		}
	};

	return (
		<div className="userInfoWrapper" onClick={modalOff}>
			<div className="userInfoText">텍스트</div>
			<div className="infoChange">
				infoChange
				<div className="infoData">
					<span className="modifyId">username :</span>
					{infoModify.id ? <input id="inputModifyId" type="text" onChange={inputModifyChange} value={infoModify.inputId} /> : <span className="seenText">{infoModify.currentId}</span>}
					<button className="modifyIdBtn" onClick={infoModifyHandler}>
						아이디 수정
					</button>
				</div>
				<div className="infoData">
					<span className="modifyPassword">Password :</span>
					{infoModify.password ? <input id="inputModifyPassword" type="text" onChange={inputModifyChange} value={infoModify.inputPassword} /> : <span className="seenText">****</span>}

					<button className="modifyPasswordBtn" onClick={infoModifyHandler}>
						패스워드 수정
					</button>
				</div>
				<div className="infoData">
					<span className="modifyEmail">email :</span>
					{infoModify.email ? <input id="inputModifyEmail" type="text" onChange={inputModifyChange} value={infoModify.inputEmail} /> : <span className="seenText">{infoModify.currentEmail}</span>}
					<button className="modifyEmailBtn" onClick={infoModifyHandler}>
						email 수정
					</button>
				</div>
			</div>
			{/* <div className="leaveMember">탈퇴</div> */}
		</div>
	);
}
