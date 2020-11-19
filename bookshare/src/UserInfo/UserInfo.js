import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import UserPostLists from './UserPostLists'
import './UserInfo.css';

export default function UserInfo({ history, match, modalOff }) {
	const [infoModify, setInfoModify] = useState({
		id: false,
		password: false,
		currentId: '',
		currentPassword: '',
		currentEmail: '',
		inputId: '',
		inputPassword: '',
	});

	// const [userListData, setuserPostList] = useState(null)
	// const [userTitle, setUserTitle] = useState('');
	// const userTitleChecker = (userTitle) => {
	// 	setUserTitle(userTitle);
	// };

	useEffect(() => {
		axios.get('http://localhost:8080/user/info').then((res) => {
			//'http://localhost:8080/user/info'
			const { data } = res;
			setInfoModify(Object.assign({}, infoModify, { currentId: data.username, currentPassword: data.password, currentEmail: data.email }));
		})
			.then(axios.get('http://localhost:8080/post/lists').then((res) => {
				console.log(res.data.posts)
			// setuserPostList(res.data.posts)
		}))
	}, [infoModify.currentId, infoModify.currentPassword, infoModify.currentEmail]);

	const infoModifyHandler = async (e) => {
		if (e.target.className === 'modifyIdBtn') {
			await axios.post('http://localhost:8080/user/changeInfo', {
				username: infoModify.inputId,
			});
			setInfoModify((prev) => {
				return Object.assign({}, infoModify, { id: !prev.id, inputId: '' });
			});
		} else if (e.target.className === 'modifyPasswordBtn') {
			await axios.post('http://localhost:8080/user/changeInfo', {
				password: infoModify.inputPassword,
			});
			setInfoModify((prev) => {
				return Object.assign({}, infoModify, { password: !prev.password, inputPassword: '' });
			});
		}
	};

	const inputModifyChange = (e) => {
		if (e.target.id === 'inputModifyId') {
			setInfoModify(Object.assign({}, infoModify, { inputId: e.target.value }));
		} else if (e.target.id === 'inputModifyPassword') {
			setInfoModify(Object.assign({}, infoModify, { inputPassword: e.target.value }));
		}
	};

	return (
		<>
		<div className="userInfoWrapper" onClick={modalOff}>
			<div className="userInfoText">
				{/* <UserPostLists userPostList={userListData} userTitleChecker={userTitleChecker}/> */}
			</div>
			<div className="infoChange">
			<span className="modi-line-or">
					<span className="modi-txt-or">회원 정보 수정</span>
				</span>
				<div className="infoData">
						<span className="modify-txt">작가명</span>
						<div className="modify-input">
					{infoModify.id ? <input id="inputModifyId" type="text" onChange={inputModifyChange} value={infoModify.inputId} /> : <span className="seenText">{infoModify.currentId}</span>}
					<button className="modifyBtn" onClick={infoModifyHandler}>
								작가명 수정
					</button>
					</div>
				</div>
				<div className="infoData">
						<span className="modify-txt">비밀번호</span>
						<div className="modify-input">
					{infoModify.password ? <input id="inputModifyPassword" type="text" onChange={inputModifyChange} value={infoModify.inputPassword} /> : <span className="seenText">****</span>}
					<button className="modifyBtn" onClick={infoModifyHandler}>
								비밀번호 수정
					</button>
					</div>
				</div>
					<div className="infoData">
						<span className="modifyEmail">이메일 주소</span>
						<div className="modify-input">
					<span className="seenText">{infoModify.currentEmail}</span>
					</div>
						</div>
			</div>
			{/* <div className="leaveMember">탈퇴</div> */}
		</div>
			</>
	);
}
