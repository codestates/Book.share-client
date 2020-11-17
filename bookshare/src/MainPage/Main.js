import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import './Main.css';
import axios from 'axios';
import StoryChart from './StoryChart';
import UserInfo from '../UserInfo/UserInfo';
import ReadingStory from '../ReadingPage/ReadingStory';
import WritingPage from '../WritingPage/WritingPage';
import { Route } from 'react-router-dom';
import Text from './Text';
import Footer from './Footer';

export default function Main({ history, match, session }) {
	const [data, setData] = useState(null);
	const [modalToggle, setModalToggle] = useState({ display: 'none' });
	const [count, setCount] = useState(0);
	const modalToggleHandler = () => {
		if (modalToggle.display === 'none') {
			setModalToggle({ display: 'flex' });
		} else {
			setModalToggle({ display: 'none' });
		}
	};
	const countIncrease = () => {
		setCount(count + 1);
	};
	const modalOff = () => {
		setModalToggle({ display: 'none' });
	};
	console.log(count);
	useEffect(() => {
		axios.get('http://localhost:8080/post/lists').then((res) => setData(res.data.posts));
		if (data) {
			console.log(data);
			setCount(data.length);
		}
	}, [count]);

	if (data) {
		if (match.url === '/main') {
			return (
				<div className="wrapper">
					<Nav match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
					<Text userData={data} modalToggle={modalToggle} modalOff={modalOff} />
					<StoryChart userData={data} match={match.params} modalOff={modalOff} />
					<Footer />
				</div>
			);
		} else if (match.url === '/main/userInfo') {
			return (
				<Route
					path="/main/userInfo"
					exact
					render={({ history }) => {
						return (
							<>
								<Nav match={match} history={history} modalOff={modalOff} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} />
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
						return (
							<>
								<Nav match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
								<WritingPage count={count} countIncrease={countIncrease} history={history} />
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
								<Nav match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
								<ReadingStory userData={data} modalOff={modalOff} match={match} />
							</>
						);
					}}
				/>
			);
		} else if (Array.isArray(data) && Number(match.params.id) > data.length + 1) {
			return <div className="loading"></div>;
		}
	}

	return (
		<>
			<Nav match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
			<div className="loading"></div>;
		</>
	);
}
