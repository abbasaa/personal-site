import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/notfound';

import './App.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/privacy" component={Projects} /> */}
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
};