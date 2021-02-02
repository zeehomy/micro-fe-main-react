/*
 * @Author: yzh
 * @Date: 2021-02-02 10:18:59
 * @LastEditTime: 2021-02-02 15:11:53
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /main-react/src/App.js
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vue-app">vue-app</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/vue-app">
            <VueApp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

function VueApp() {
  return <div id="vue-app">
    VueApp
  </div>;
}
