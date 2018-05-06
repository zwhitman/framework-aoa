import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HelloWorld from './HelloWorld/HelloWorld';
import SubComp from './SubComp/SubComp';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="content">
              <div className="links">
                <Link to="/">Home</Link>
                <Link to="/main">Main</Link>
                <Link to="/sub">Sub</Link>
              </div>
              <div className="view">
                <Route exact path="/" component={Home} />
                <Route path="/main" component={HelloWorld} />
                <Route path="/sub" component={SubComp} />
              </div>
            </div>
        </Router>
    );
  }
}

const Home = () => (
  <div className="home">
    <div className="the-div">
      <h1>cedsci react hello world</h1>
      <HelloWorld/>
    </div>
  </div>
);

export default App;
