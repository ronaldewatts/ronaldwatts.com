import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './features/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;