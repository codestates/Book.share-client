import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SucessModal from './SucessModal';
import FailureModal from './FailureModal';
import './Signup.css';

axios.defaults.withCredentials = true;

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [recheckPassword, setRecheckPassword] = useState('');
	const [username, setUsername] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [recheckPasswordError, setRecheckPasswordError] = useState('');
	const [sucessModalState, setSucessModalState] = useState(false);
	const [failureModalState, setFailureModalState] = useState(false);

	const usernameValidation = (e) => {
		setUsername(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		if (email === '') {
			setEmailError(() => '');
		} else if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email) !== true) {
			setEmailError('올바른 이메일을 입력해주세요');
		} else {
			setEmailError(() => '');
		}
	}, [email]);

	useEffect(() => {
		if (password === '') {
			setPasswordError(() => '');
		} else if (/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(password) !== true) {
			setPasswordError('비밀번호는 숫자, 영문, 특수문자를 포함한 8자 이상이어야 합니다');
		} else {
			setPasswordError(() => '');
		}
	}, [password]);

	useEffect(() => {
		if (password === '') {
			setRecheckPasswordError(() => '');
		} else if (password !== recheckPassword) {
			setRecheckPasswordError('비밀번호가 일치하지 않습니다');
		} else if (password === recheckPassword) {
			setRecheckPasswordError(() => '');
		}
	}, [recheckPassword]);
	
	//모닱창 닫는 이벤트
	const onSucessclick = () => {
		setSucessModalState(false)
	}
	//모닱창 닫는 이벤트
	const onFailclick = () => {
		setFailureModalState(false)
	}


	const onEmailSubmit = (e) => {
		e.preventDefault();
		if (emailError === '') {
			setEmailError(() => '');
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
		} else {
			setEmailError('이메일을 확인하세요');
		}
	};

	const onSubmit = (e) => {
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

		setEmail('');
		setPassword('');
		setUsername('');
		setRecheckPassword('');
	};
	return (
		<>
			<section className="signup-box">
				<span className="line-or-signup">
					<span className="txt-or-signup">▼ 아직 계정이 없으신가요? ▼</span>
				</span>
				<div className="inp-signup">

				<div className="signup-user">
					<input className="signup-txt" type="text" placeholder="User Name" onChange={usernameValidation} value={username}></input>
				</div>
				<div className="signup-email">
					<div className="email-box">
					  <input className="signup-txt-email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
					  <button className="recheck-btn" type="submit" onClick={onEmailSubmit}>
								중복확인
					  </button>
						</div>
						<p className="err-txt">{emailError}</p>
				</div>
				<div className="signup-password">
					<input className="signup-txt" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
						<p className="err-txt">{passwordError}</p>
					</div>
					<div className="signup-pw-recheck">
						<input className="signup-txt" type="password" placeholder="Password 재확인" onChange={(e) => setRecheckPassword(e.target.value)} value={recheckPassword}></input>

						<p className="err-txt">{recheckPasswordError}</p>
					</div>
					<button className="signup-btn" type="submit" onClick={onSubmit}>
						회원가입
					</button>
				</div>
			</section>
			<SucessModal onSucessclick={onSucessclick} sucessModalState={sucessModalState} />
			<FailureModal onFailclick={onFailclick} failureModalState={failureModalState} />
		</>
	);
}

export default withRouter(Signup);
