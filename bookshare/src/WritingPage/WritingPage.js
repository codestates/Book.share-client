import React, { useState } from 'react';
import Nav from './WritingNav';
import StoryBody from './StoryBody';
import axios from 'axios';

export default function WritingPage({ count, countIncrease, history }) {
	const [data, setData] = useState('');
	const [title, setTitle] = useState('');

	const handleStoryChange = (event, editor) => {
		const data = editor.getData();

		setData(data);
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
				article: data,
				id: count,
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<StoryBody handleStoryChange={handleStoryChange} handleTitleChange={handleTitleChange} handleCancleClick={handleCancleClick} handleSubmitClick={handleSubmitClick} data={data} title={title} />
		</>
	);
}
