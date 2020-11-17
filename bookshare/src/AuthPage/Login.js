import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Login({ history }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('비밀번호 필수입니다');
	// const onIdChange = (e) => {
	//   setEmail(Object.assign({}, input, { email: e.target.value }))
	// }

	// const onPwChange = (e) => {
	//   setlPassword(Object.assign({}, input, { password: e.target.value }))
	// }

	const emailValidation = (e) => {
		setEmail(e.target.value);
		// if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email) !== true) {
		// 	setEmailError('올바른 이메일을 입력하세요');
		// }
		// setEmailError('');
	};

	const passwordValidation = (e) => {
		setPassword(e.target.value);
		// if (password !== '') {
		// 	setPasswordError('');
		// }
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email) !== true) {
			setEmailError('올바른 이메일을 입력하세요');
		} else if (password !== '') {
			setPasswordError('비밀번호는 필수 입니다');
		}
		axios
			.post('http://localhost:8080/user/login', {
				email: email,
				password: password,
			})
			.then((res) => {
				history.push(`/${res.session}`);
			})
			.catch((res) => {
				if (res.status === 409) {
					alert('로그인에 실패하였습니다');
				}
			});
		setEmail('');
		setPassword('');
	};
	return (
		<>
			<section>
				<div>
					<p>ID:</p>
					<input type="email" placeholder="이메일을 입력 해주세요" onChange={emailValidation} value={email}></input>
					<div>{emailError}</div>
				</div>
				<div>
					<p>PW:</p>
					<input type="password" placeholder="비밀번호를 입력 해주세요" onChange={passwordValidation} value={password}></input>
					<div>{passwordError}</div>
				</div>
				<button type="submit" onClick={onSubmit}>
					로그인
				</button>
			</section>
		</>
	);
}

export default withRouter(Login);
