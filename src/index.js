import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {Header, FirstPage} from './App';
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
            <Route exact path="/" component={App}/>
            <Route path="/firstPage" component={FirstPage}/>
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
