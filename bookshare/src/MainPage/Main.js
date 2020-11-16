import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import './Main.css';
import axios from 'axios';
import StoryChart from './StoryChart';
import UserInfo from '../UserInfo/UserInfo';
import ReadingStory from '../ReadingPage/ReadingStory';
import StoryBody from '../WritingPage/StoryBody';
import { Route } from 'react-router-dom';
import Text from './Text';
import Footer from './Footer';
export default function Main({ match }) {
	console.log(match);
	const [data, setData] = useState(null);
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
		axios.get('https://jsonplaceholder.typicode.com/comments/').then((res) => setData([...res.data.slice(0, 5)]));
	}, []);

	if (match.url === '/main') {
		return (
			data && (
				<div className="wrapper">
					<Nav match={match} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
					<Text userData={data} modalToggle={modalToggle} modalOff={modalOff} />
					<StoryChart userData={data} match={match.params} />
					<Footer />
				</div>
			)
		);
	} else if (match.url === '/main/userInfo') {
		return (
			<Route
				path="/main/userInfo"
				exact
				render={({ history }) => {
					return (
						<>
							<Nav match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} />
							<UserInfo modalOff={modalOff} userData={data} />
							<Footer />
						</>
					);
				}}
			/>
		);
	} else if (match.url === '/write') {
		return (
			<Route
				path="/write"
				exact
				render={({ history, match }) => {
					console.log(match);
					return (
						<>
							<Nav history={history} match={match} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} />
							<StoryBody history={history} />
						</>
					);
				}}
			/>
		);
	} else if (Array.isArray(data) && Number(match.params.id) <= data.length) {
		return (
			<Route
				path={`/main/${data.filter((el) => el.id === Number(match.params.id) && el.id)[0].id}`}
				exact
				render={({ history }) => {
					return (
						<>
							<Nav match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} />
							<ReadingStory userData={data} modalOff={modalOff} match={match} />
						</>
					);
				}}
			/>
		);
	} else if (Array.isArray(data) && Number(match.params.id) > data.length + 1) {
		return <div>404</div>;
	}
	return <div className="loading"></div>;
}
