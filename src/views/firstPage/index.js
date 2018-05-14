/*jshint esversion: 6 */
/*jslint node: true */
"use strict";

import React, { Component } from 'react';
import {Button} from "react-bootstrap";

const _defaultValue = "test";
export default class FirstPage extends Component{
    constructor(){
        super();
        this.state = {index: 0, value: _defaultValue};

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        let {index} = this.state;
        this.setState({value:_defaultValue + index, index: 1});
    }

    async onClick() {
        let {index} = this.state;
        return new Promise((resolve) => this.setState({value: _defaultValue + index, index: ++index, showElement: index === 2}, resolve));
    }

    render(){
        let {value, index, showElement} = this.state;
        return (<div>test, {value}
            {showElement && (<div>Novi Div</div>)}
            <br/>
            <Button onClick={this.onClick} >Test</Button>
        </div>)
    }
}