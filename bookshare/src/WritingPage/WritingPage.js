import React, { useState } from 'react';
import StoryBody from './StoryBody';
import axios from 'axios';
import './WritingPage.css'

export default function WritingPage({ count, countIncrease, history }) {
	const [editorHtml, setData] = useState('');
	const [title, setTitle] = useState('');

	const handleStoryChange = (html) => {
		setData(html);
	};
	console.log(count);

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
		console.log(count);
		axios
			.post('http://localhost:8080/post/push', {
				title: title,
				article: editorHtml,
				id: 1,
			})
<<<<<<< HEAD
			.then((res) => {
				console.log(res)
			})
=======
>>>>>>> 71235710fe0d19f52fd726c9d2cfcf333b6d3f3b
			.catch((err) => console.log(err));
	};

	return (
		<>
			<StoryBody handleStoryChange={handleStoryChange} handleTitleChange={handleTitleChange} handleCancleClick={handleCancleClick} handleSubmitClick={handleSubmitClick} editorHtml={editorHtml} title={title} />
		</>
	);
}
