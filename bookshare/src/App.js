// import './App.css';
import React from "react";
import { Route } from 'react-router-dom';
import Main from './MainPage/Main';
import AuthMain from './AuthPage/AuthMain';
function App() {
	return (
		<div className="App">
			<Route exact path="/about" component={AuthMain} />
			<Route path="/" component={Main} />
		</div>
	);
}

export default App;
