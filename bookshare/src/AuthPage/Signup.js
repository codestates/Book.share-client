import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SucessModal from './SucessModal';
import FailureModal from './FailureModal';
import './AuthMain.css';

axios.defaults.withCredentials = true;

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [recheckPassword, setRecheckPassword] = useState('');
	const [username, setUsername] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('비밀번호 필수입니다');
	const [recheckPasswordError, setRecheckPasswordError] = useState('비밀번호 필수입니다');
	const [usernameError, setUsernameError] = useState('');
	const [sucessModalState, setSucessModalState] = useState(false);
	const [failureModalState, setFailureModalState] = useState(false);

	const emailValidation = (e) => {
		setEmail(e.target.value);
	};

	const usernameValidation = (e) => {
		setUsername(e.target.value);
		console.log(e.target.value);
	};

	const passwordValidation = (e) => {
		setPassword(e.target.value);
		console.log(e.target.value);
		if (/[^A-Za-z0-9]/gi.test(password) !== true) {
			setPasswordError('비밀번호는 특수문자를 포함하여야 합니다');
		}
		setPasswordError('');
	};

	const passwordReValidation = (e) => {
		setRecheckPassword(e.target.value);
		if (password !== recheckPassword) {
			setRecheckPasswordError('비밀번호가 일치하지 않습니다');
		} else if (password === recheckPassword) {
			setRecheckPasswordError(() => '');
		}
	};

	const onUserNameSubmit = (e) => {
		e.preventDefault();
		if (/^[A-Za-z0-9]{4,10}$/.test(username) !== true) {
			setUsernameError('username은 영문 4글자 이상 10글자 이하입니다');
		} else {
			axios
				.post('http://localhost:8080/user/signup', {
					username: username,
				})
				.then((res) => {
					if (res.status === 201) {
						console.log(res);
						//모달을 띄운다
						setSucessModalState(true);
					}
				})
				.catch((res) => {
					if (res.status === 409) {
						//모달을 띄운다
						setFailureModalState(true);
					}
				});
		}
	};

	const onEmailSubmit = (e) => {
		e.preventDefault();
		if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email) !== true) {
			setEmailError('올바른 이메일을 입력하세요');
		} else {
			axios
				.post('http://localhost:8080/user/signup', {
					email: email,
				})
				.then((res) => {
					if (res.status === 201) {
						console.log(res);
						//모달을 띄운다
						setSucessModalState(true);
					}
				})
				.catch((res) => {
					if (res.status === 409) {
						//모달을 띄운다
						setFailureModalState(true);
					}
				});
		}
	};

	const onSubmit = (e) => {
		if (email && username && password && recheckPassword && sucessModalState && password === recheckPassword) {
			e.preventDefault();
			axios
				.post('http://localhost:8080/user/signup', {
					email: email,
					username: username,
					password: password,
				})
				.then((res) => {
					if (res.status === 201) {
						console.log(res);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			alert('입력값을 확인하세요');
		}
		setEmail('');
		setPassword('');
		setUsername('');
	};
	return (
		<>
			<section>
				<div className="signup-user">
					<p>username:</p>
					<input type="username" placeholder="이름을 입력해주세요" onChange={usernameValidation} value={username}></input>
					<div>{usernameError}</div>
					<button type="submit" onClick={onUserNameSubmit}>
						중복확인
					</button>
				</div>
				<div className="signup-email">
					<p>email:</p>
					<input type="email" placeholder="이메일을 입력 해주세요" onChange={emailValidation} value={email}></input>
					<div>{emailError}</div>
					<button type="submit" onClick={onEmailSubmit}>
						중복확인
					</button>
				</div>
				<div className="signup-password">
					<p>password:</p>
					<input type="password" placeholder="비밀번호를 입력 해주세요" onChange={passwordValidation} value={password}></input>
					<div>{passwordError}</div>
				</div>
				<div className="signup-pw-recheck">
					<p>password 재확인:</p>
					<input type="password" placeholder="비밀번호를 입력 해주세요" onChange={passwordReValidation} value={recheckPassword}></input>
					<div>{recheckPasswordError}</div>
				</div>
				<button type="submit" onClick={onSubmit}>
					회원가입
				</button>
			</section>
			<SucessModal sucessModalState={sucessModalState} />
			<FailureModal failureModalState={failureModalState} />
		</>
	);
}

export default withRouter(Signup);
