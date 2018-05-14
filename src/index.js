import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dashboard, FirstPage} from './views';
import {Header} from "./components";
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Dashboard}/>
            <Route path="/firstPage" component={FirstPage}/>
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
