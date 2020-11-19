import React, { useState, useEffect } from 'react';
import StoryBody from './StoryBody';
import axios from 'axios';
import './WritingPage.css';
export default function WritingPage({ data, countIncrease, history }) {
	console.log(data);
	const [user, setUser] = useState('');
	const [editorHtml, setData] = useState('');
	const [title, setTitle] = useState('');
	const handleStoryChange = (html) => {
		setData(html);
	};
	const handleTitleChange = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
	};
	const handleCancleClick = (e) => {
		e.preventDefault();
		history.goBack('/main');
	};
	const handleSubmitClick = () => {
		countIncrease();
		axios
			.post('http://localhost:8080/post/push', {
				title: title,
				article: editorHtml
			})
			.then((res) => {
				if (res) {
					window.location.reload();
					history.replace('/main');
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<StoryBody
				handleStoryChange={handleStoryChange}
				handleTitleChange={handleTitleChange}
				handleCancleClick={handleCancleClick}
				handleSubmitClick={handleSubmitClick}
				editorHtml={editorHtml}
				title={title}
			/>
		</>
	);
}