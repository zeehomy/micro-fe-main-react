/*
 * @Author: yzh
 * @Date: 2021-02-02 10:18:59
 * @LastEditTime: 2021-02-02 13:50:02
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      home
    </div>
  )
}

function Users() {
  return <h2>Users</h2>;
}

// export default App;
