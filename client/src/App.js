import React from 'react';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import fire from './Config/Fire'

import Home from "./Components/Home Page/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import NavBar from "./Components/Nav Bar/NavBar"
import LoginPage from "./Components/Login page/LoginPage"
import RegisterPage from "./Components/Register Page/RegisterPage"

class App extends Component() {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener() {
      fire.auth().onAuthStateChanged((user) =>{
        if(user){
          this.setState({user});
        }
        else{
          this.setState({user: null});
        }
      })
  }
  render(){
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Login" component={LoginPage}/>
          <Route path="/Register" component={RegisterPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
