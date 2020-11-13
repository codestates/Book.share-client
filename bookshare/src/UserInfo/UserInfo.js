import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserInfo.css';

export default function UserInfo({ history, match, modalOff }) {
	return (
		<div className="userInfoWrapper" onClick={modalOff}>
			<div className="userInfoText">텍스트</div>
			<div className="infoChange">
				infoChange
				<div className="modifyId">id</div>
				<div className="modifyPw">pw</div>
			</div>
			<div className="leaveMember">탈퇴</div>
		</div>
	);
}
