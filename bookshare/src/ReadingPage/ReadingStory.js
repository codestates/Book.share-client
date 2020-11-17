import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ReadingPage.css';
import Comment from './Comment';

export default function ReadingStory({ match, modalOff, userData }) {
	console.log(userData);
	const ref = useRef(null);

	console.log(match.params.id);
	const [userInfo, setUserInfo] = useState(null);
	useEffect(() => {
		axios.get('http://localhost:8080/post/lists').then((res) => {
			console.log(res);
			setUserInfo(
				res.data.posts.filter((data) => {
					if (String(data.id) === match.params.id) {
						return data;
					}
				})[0]
			);
		});
	}, []);
	const iframeHandler = (e) => {
		e.target.contentWindow.document.body.style.fontSize = '24px';
		e.target.contentWindow.document.body.style.fontWeight = '300';
		e.target.contentWindow.document.body.style.color = '#343a40';
		e.target.contentWindow.document.body.style.fontFamily = 'Segoe UI';
		e.target.contentWindow.document.body.style.lineHeight = '70px';
		e.target.contentWindow.document.body.style.textDecoration = 'underline #ced4da';
		e.target.contentWindow.document.body.style.opacity = '0.5';
	};

	console.log(userInfo);
	return (
		userInfo && (
			<>
				<div className="readingPageWrapper" onClick={modalOff}>
					<div className="textHeader">
						<div className="title">{userInfo.title}</div>
						<div className="date">{Date().substring(0, 25)}</div>
					</div>
					<div className="textBody" id="textBody"></div>
					<div className="textBody">
						<iframe
							frameBorder="0"
							onLoad={iframeHandler}
							ref={ref}
							style={{ transform: 'scale(1.2)' }}
							srcDoc={userInfo.article}
							className="showtext"
							width={860}
							height={1400}
							scrolling="no"
						></iframe>
						{/* <div className="textTag">tag: {}</div> */}
					</div>
					{/* <Comment /> */}
				</div>
			</>
		)
	);
}
