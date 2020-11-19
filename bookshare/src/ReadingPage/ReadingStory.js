import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ReadingPage.css';
import Comment from './Comment';

export default function ReadingStory({ title, match, modalOff, userData }) {
	const ref = useRef(null);

	const [userInfo, setUserInfo] = useState(null);
	useEffect(() => {
		if (title === '') {
			setUserInfo(
				userData.filter((data) => {
					if (String(data.id) === match.params.id) {
						return data;
					}
				})[0]
			);
		}
		console.log(`title`, title);
		axios.get(`http://localhost:8080/post/${title}`).then((res) => {
			console.log(res);
			setUserInfo(Object.assign({}, res.data));
		});
	}, []);
	console.log(userInfo);

	const iframeHandler = (e) => {
		e.target.contentWindow.document.body.style.fontSize = '20px';
		e.target.contentWindow.document.body.style.fontWeight = '100';
		e.target.contentWindow.document.body.style.color = '#343a40';
		e.target.contentWindow.document.body.style.fontFamily = 'Segoe UI';
		e.target.contentWindow.document.body.style.lineHeight = '40px';
		e.target.contentWindow.document.body.style.textDecoration = 'underline #ced4da';
		e.target.contentWindow.document.body.style.opacity = '0.5';
		e.target.contentWindow.document.body.style.marginLeft = '50px';
	};

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
							style={{ transform: 'scale(1.1)' }}
							srcDoc={userInfo.article}
							className="showtext"
							width={650}
							height={3000}
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
