import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import './Main.css';
import axios from 'axios';
import StoryChart from './StoryChart';
import UserInfo from '../UserInfo/UserInfo';
import ReadingStory from '../ReadingPage/ReadingStory';
import WritingPage from '../WritingPage/WritingPage';
import { Route, Redirect } from 'react-router-dom';
import Text from './Text';
import Footer from './Footer';

export default function Main({ history, match, session }) {
	const [cookie, setCookie] = useState(null);
	const [data, setData] = useState(null);
	const [modalToggle, setModalToggle] = useState({ display: 'none' });
	const [count, setCount] = useState(0);
	const [title, setTitle] = useState('');
	const titleChecker = (title) => {
		setTitle(title);
	};
	const modalToggleHandler = () => {
		if (modalToggle.display === 'none') {
			setModalToggle({ display: 'flex' });
		} else {
			setModalToggle({ display: 'none' });
		}
	};
	const countIncrease = () => {
		setCount(
			data.reduce((acc, cur) => {
				if (cur.id > acc) {
					return acc;
				}
				return cur;
			}).id + 1
		);
	};
	const modalOff = () => {
		setModalToggle({ display: 'none' });
	};

	useEffect(() => {
		setCookie(document.cookie.split(';').filter((cookie) => cookie.match('userid='))[0]);
		// cookie에서 토큰 뽑아오기
		axios.get('http://localhost:8080/post/lists').then((res) => setData(res.data.posts));
	}, [title]);

	if (data) {
		if (match.url === '/main') {
			return (
				<div className="wrapper">
					<Nav cookie={cookie} match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
					<Text userData={data} titleChecker={titleChecker} modalToggle={modalToggle} modalOff={modalOff} />
					<StoryChart userData={data} match={match.params} modalOff={modalOff} titleChecker={titleChecker} />
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
								<Nav cookie={cookie} match={match} history={history} modalOff={modalOff} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} />
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
								<Nav cookie={cookie} match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
								<WritingPage data={data} countIncrease={countIncrease} history={history} />
							</>
						);
					}}
				/>
			);
		} else if (Number(match.params.id) <= data[0].id + 1) {
			return (
				<Route
					path={`/main/${data.filter((el) => el.id === Number(match.params.id))[0].id}`}
					exact
					render={({ history }) => {
						return (
							<>
								<Nav cookie={cookie} match={match} history={history} modalToggleHandler={modalToggleHandler} modalToggle={modalToggle} modalOff={modalOff} />
								<ReadingStory history={history} count={count} title={title} countIncrease={countIncrease} userData={data} modalOff={modalOff} match={match} />
							</>
						);
					}}
				/>
			);
		}
	}

	return <></>;
}
