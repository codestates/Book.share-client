import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import './Main.css';
import axios from 'axios';
import StoryChart from './StoryChart';
import UserInfo from '../UserInfo/UserInfo';
import { Route } from 'react-router-dom';
import Text from './Text';
export default function Main({ match }) {
	const [data, setData] = useState([]);
	const [modalToggle, setModalToggle] = useState({ display: 'none' });
	const modalToggleHandler = () => {
		if (modalToggle.display === 'none') {
			setModalToggle({ display: 'flex' });
		} else {
			setModalToggle({ display: 'none' });
		}
	};
	const modalOff = () => {
		setModalToggle({ display: 'none' });
	};

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/comments/').then((res) => setData([...res.data.slice(0, 7)]));
	}, []);

	if (match.url === '/main/userInfo') {
		return (
			<Route
				path="/main/userInfo"
				exact
				render={({ history }) => {
					return (
						<>
							<Nav history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} />
							<UserInfo modalOff={modalOff} />
						</>
					);
				}}
			/>
		);
	}

	return (
		<div className="wrapper">
			<Nav modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
			<Text data={data} modalToggle={modalToggle} modalOff={modalOff} />
			<StoryChart data={data} match={match.params} />
		</div>
	);
}
