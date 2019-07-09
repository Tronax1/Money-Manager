import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {connect} from "react-redux"
import {fetchUser} from "./actions"

import Home from "./Components/Home Page/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import NavBar from "./Components/Nav Bar/NavBar"
import Auth from "./Components/Authentication/Auth"
import RegisterPage from "./Components/Register Page/RegisterPage"
import AfterLoginRouter from "./Components/AfterLoginRouter/AfterLoginRouter"
 
class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Auth} />
          <Route path="/Register" component={RegisterPage} />
          <Route path="/user" component={AfterLoginRouter}/>
        </Switch>
      </BrowserRouter>
    );}
}
export default connect(null, {fetchUser})(App);
