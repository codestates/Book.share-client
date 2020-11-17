import React, { useState } from 'react';
import Nav from './WritingNav';
import StoryBody from './StoryBody';
import axios from 'axios';

export default function WritingPage({ history }) {
	const [data, setData] = useState('');
	const [title, setTitle] = useState('');

	const handleStoryChange = (event, editor) => {
		const data = editor.getData();
		console.log(data);
		setData(data);
		console.log(data);
	};

	const handleTitleChange = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
		console.log(title);
	};

	const handleCancleClick = (e) => {
		e.preventDefault();
		history.goBack('/main');
	};
	const handleSubmitClick = () => {
		console.log(title);
		axios
			.post('http://localhost:8080/post/push', {
				title: title,
				article: data,
				id: 20,
			})
			.then((res) => {
				console.log(res);
				history.push('/main');
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			{/* <Nav /> */}
			<StoryBody handleStoryChange={handleStoryChange} handleTitleChange={handleTitleChange} handleCancleClick={handleCancleClick} handleSubmitClick={handleSubmitClick} data={data} title={title} />
		</>
	);
}
