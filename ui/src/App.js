import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            {/*<Route exact path="/session/:sessionId" component={Session}/>*/}
        </Router>
    );
  }
}

export default App;
