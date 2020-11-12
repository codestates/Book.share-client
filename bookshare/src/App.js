import './App.css';
import { Route } from 'react-router-dom';
import Main from './MainPage/Main';
import AuthMain from './AuthPage/AuthMain';
import Nav from './Nav';

function App() {
	return (
		<div className="App">
			<Route exact path="/:id" component={Main} />
			<Route exact path="/:id/:name" component={Nav}></Route>
			<Route path="/about" component={AuthMain} />
		</div>
	);
}

export default App;
