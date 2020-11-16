// import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './MainPage/Main';
import AuthMain from './AuthPage/AuthMain';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={AuthMain} />
				<Route exact path="/main" component={Main} />
				<Route path="/main/userInfo" component={Main} />
				<Route path="/main/:id" component={Main} />
				<Route path="/write" component={Main} />
			</Switch>
		</div>
	);
}

export default App;
