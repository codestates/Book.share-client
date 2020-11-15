import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ReadingPage.css';
import Comment from './Comment';

export default function ReadingStory({ match, modalOff, userData }) {
	console.log(userData);
	console.log(match.params.id);
	const [userInfo, setUserInfo] = useState(null);
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/comments/').then((res) => {
			setUserInfo(
				res.data.filter((data) => {
					if (String(data.id) === match.params.id) {
						return data;
					}
				})[0]
			);
		});
	}, []);
	console.log(userInfo);
	return (
		userInfo && (
			<>
				<div className="readingPageWrapper" onClick={modalOff}>
					<div className="textHeader">
						<div className="title">title: {userInfo.name}</div>
						<div className="date">date: {Date()}</div>
					</div>
					<div className="textBody">
						body
						<div className="showtext">body: {userInfo.body}</div>
						<div className="textTag">tag: {userInfo.email}</div>
					</div>
					<Comment />
				</div>
			</>
		)
	);
}
