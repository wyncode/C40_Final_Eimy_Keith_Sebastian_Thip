import React from 'react';
import { useState, useEffect } from 'react';
import ContextDemo from './components/ContextDemo';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buy from './Pages/Buy/Buy';
import Rent from './Pages/Rent/Rent';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import Manage from './Pages/Manage/Manage';
import Community from './Pages/Community/Community';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ManageResults from './Pages/ManageResults/ManageResults';
import { FooterContainer } from './components/Containers/footer';
import ScrollToTop from './components/ScrollToTop';
import { AppContextProvider } from './context/AppContext';

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <ScrollToTop>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/buy" component={Buy} />
              <Route exact path="/rent" component={Rent} />
              <Route exact path="/manage" component={Manage} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/manageResults" component={ManageResults} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
      </AppContextProvider>
    </div>
  );
};

export default App;
