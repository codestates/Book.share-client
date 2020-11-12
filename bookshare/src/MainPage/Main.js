import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import './Main.css';
import axios from 'axios';
import StoryChart from './StoryChart';
import Text from './Text';
export default function Main({ match, history }) {
	const [data, setData] = useState([]);
	console.log(history);
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/comments/').then((res) => setData([...res.data.slice(0, 7)]));
	}, []);

	return (
		<div className="wrapper">
			<Nav />
			<Text data={data} />
			<StoryChart data={data} match={match.params} />
		</div>
	);
}
