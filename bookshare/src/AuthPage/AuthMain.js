import React from 'react';
import Login from './Login';
import Signup from './Signup';
import SocialLogin from './SocialLogin';

export default function AuthMain({ session, sessionHandler }) {
	return (
		<main id="auth-main">
			<Login session={session} sessionHandler={sessionHandler} />
			<Signup />
			{/* <SocialLogin /> */}
		</main>
	);
}
