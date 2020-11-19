import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

axios.defaults.withCredentials = true;

function Login({ history }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');

	useEffect(() => {
		if (email === '') {
			setEmailError(() => '');
		} else if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email) !== true) {
			setEmailError('올바른 이메일을 입력하세요');
		} else {
			setEmailError(() => '');
		}
	});

	const onSubmit = (e) => {
		e.preventDefault();
		if (email && password && emailError === '') {
			axios
				.post('http://localhost:8080/user/login', {
					email: email,
					password: password,
				})
				.then((res) => {
					console.log(res);

					history.push(`/main`);
				})
				.catch((res) => {
					if (res.status === 409) {
						alert('로그인에 실패하였습니다');
					}
				});
		}
		setEmail('');
		setPassword('');
	};
	return (
		<>
			<section className="box-sign">
				<div className="box-input">
					<input
						className="sign-txt"
						type="email"
						placeholder="ID"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					></input>
					<div>{emailError}</div>
				</div>
				<div className="box-input">
					<input
						className="sign-txt"
						type="password"
						placeholder="Password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
					></input>
				</div>
				<button className="btn-sign" type="submit" onClick={onSubmit}>
					로그인
				</button>
				<span className="line-or">
					<span className="txt-or">또는</span>
				</span>
			</section>
		</>
	);
}

export default withRouter(Login);
