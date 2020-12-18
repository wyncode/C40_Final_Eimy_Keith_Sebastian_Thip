import { useState, useEffect } from 'react';
import ContextDemo from './components/ContextDemo';

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buy from './Pages/Buy/Buy';
import Rent from './Pages/Rent/Rent';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import Manage from './Pages/Manage/Manage';
import Community from './Pages/Community/Community';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/rent" component={Rent} />
          <Route exact path="/manage" component={Manage} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
