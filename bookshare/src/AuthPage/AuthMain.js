import React from 'react';
import Login from './Login';
import Signup from './Signup';
import SocialLogin from './SocialLogin';

export default function AuthMain() {
	return (
		<main id="auth-main">
			<Login />
			<Signup />
			<SocialLogin /> 
		</main>
	);
}
