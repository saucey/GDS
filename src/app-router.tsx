import * as React from 'react';
import { Route } from 'react-router-dom';
import { ExampleContainer, Search } from './pages';
import { BrowserRouter } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Route exact={true} path={'/'} component={ExampleContainer} />
                <Route exact={true} path={'/search'} component={Search} />
            </BrowserRouter>
        </React.Fragment>
    );
};