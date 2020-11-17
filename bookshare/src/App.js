// import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './MainPage/Main';
import AuthMain from './AuthPage/AuthMain';

function App() {
	const [session, setSession] = useState(null);
	const sessionHandler = (session) => {
		setSession(session);
	};
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => <AuthMain session={session} sessionHandler={sessionHandler} />} />

				<Route exact path="/main" render={({ match, history }) => <Main match={match} history={history} session={session} />} />
				<Route path="/main/userInfo" component={Main} />
				<Route path="/main/:id" component={Main} />
				<Route path="/write" component={Main} />
			</Switch>
		</div>
	);
}

export default App;
