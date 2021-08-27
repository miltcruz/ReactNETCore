import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Weather } from './components/Weather';
import { Users } from './components/Users';

import './custom.css'

const App = () => {

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/weather' component={Weather} />
            <Route path='/users' component={Users} />
        </Layout>
    );

}

export default App