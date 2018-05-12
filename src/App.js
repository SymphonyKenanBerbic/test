import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class FirstPage extends Component{
    constructor(){
        super();
        this.state = {index: 0};
    }

    componentDidMount(){
        this.setState({value:"test " + this.state.index})
    }

    render(){
        let {value, index} = this.state;
        return (<div>test, {value}
        <br/>
            <Button onClick={()=> this.setState({value: "test " + index, index: ++index})} >Test</Button>
        </div>)
    }
}

class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return (<Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">React-Bootstrap</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/firstPage">
                    FirstPage
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>)
    }
}

export {Header, FirstPage};

export default App;
