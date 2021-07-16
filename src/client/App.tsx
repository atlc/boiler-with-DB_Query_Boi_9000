import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './views/Login';
import Profile from './views/Profile';

const App = () => {

	const token = !!localStorage.getItem('token');
	const [isLoggedIn, setIsLoggedIn] = useState(token);

	return (
		<BrowserRouter>
			<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			<Switch>
				<Route exact path='/'>
					<h1>Home!</h1>
				</Route>
				<Route exact path='/login'>
					<Login setIsLoggedIn={setIsLoggedIn} />
				</Route>
				<PrivateRoute exact path='/profile'>
					<Profile />
				</PrivateRoute>
				<Route path='*'>
					<h1 className="display-1">404, y'all!</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};


export default App;
