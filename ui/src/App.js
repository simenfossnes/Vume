import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            {/*<Route exact path="/shroom/:shroomId" component={Shroom}/>*/}
        </Router>
    );
  }
}

export default App;
