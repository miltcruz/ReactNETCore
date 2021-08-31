import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Weather } from './components/Weather';
import { Customers } from './components/Customers';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

const App = () => {

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/weather' component={Weather} />
            <AuthorizeRoute exact path='/customers' component={Customers} />
            <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        </Layout>
    )
}

export default App
