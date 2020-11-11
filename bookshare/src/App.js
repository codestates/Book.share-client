import './App.css';
import { Route } from 'react-router-dom';
import Main from './MainPage/Main';
import AuthMain from './AuthPage/AuthMain';
function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Main} />
			<Route path="/about" component={AuthMain} />
		</div>
	);
}

export default App;
