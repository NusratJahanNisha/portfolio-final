import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import AboutMe from './components/AboutMe/AboutMe';
import AllProjects from './components/AllProjects/AllProjects';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/allProjects">
            <AllProjects></AllProjects>
          </Route>
          <Route path="/aboutMe">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/form">
            <Form></Form>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
