import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authors from './views/Authors';
import Login from './views/Login';

const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<h1>Home!</h1>
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/authors'>
					<Authors />
				</Route>
				<Route exact path='/posts'>
					<h1>Posts</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};


export default App;
