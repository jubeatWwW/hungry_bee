import React from 'react';
import {render} from 'react-dom';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import NavBar from './NavBar';

import HomePage from './HomePage';
import Store from './Store';
import Group from './Group';

import '../style/index.scss';


class App extends React.Component {
    render() {
        return (
                <div>
                    <NavBar />
                    {this.props.children}
                </div>
                );
    }
};

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/store" component={Store}/>
        <Route path="/group" component={Group}/>
    </Route>
);

render(<Router routes={routes} history={hashHistory} />, document.getElementById('container'));
