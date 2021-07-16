import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './views/Login';
import Profile from './views/Profile';

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
