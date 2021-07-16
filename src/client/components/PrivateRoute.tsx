import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props: PrivateRoutePropz) => {

    const token = localStorage.getItem('token');

    if (token) {
        return (
            <Route exact={props.exact || false} path={props.path}>
                {props.children}
            </Route>
        );
    } else {
        return <Redirect to='/login' />
    }
}

interface PrivateRoutePropz {
    path: string;
    exact?: boolean;
    children: React.ReactNode;
}

export default PrivateRoute;
