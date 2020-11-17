import React from 'react';
import Login from './Login';
import Signup from './Signup';
import SocialLogin from './SocialLogin';
import './AuthMain.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

export default function AuthMain({ session, sessionHandler }) {
	return (
		<main id="auth-main">
			<article className="intro-bookshare">
				<h3 className="tit-bookshare">내 글이 작품이 되는 공간
				  <span className="ico-bookshare">
					<FontAwesomeIcon icon={faCoffee} size="xs"/>
					</span>
				</h3>
				<p className="desc-bookshare">
					<span>북쉐어에서 서랍속에 간직하고 있던 <br></br></span>
				  <span>글과 감성을 작성해 보세요. <br></br></span>
					<span className="txt-bookshare">그리고 공유해 보세요. 당신의 아름다운 작품을.</span>
				</p>
			</article>
			<section className="sign-bookshare">
				<p className="tit-sign">Book.share</p>
			  <Login session={session} sessionHandler={sessionHandler} />
// 			  <SocialLogin />
				<Signup />
			</section>
			<div className="bg-img"></div>
		</main>
	);
}
