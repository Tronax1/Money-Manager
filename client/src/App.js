import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./Components/Home Page/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import NavBar from "./Components/Nav Bar/NavBar"
import Auth from "./Components/Authentication/Auth"
import RegisterPage from "./Components/Register Page/RegisterPage"

function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Auth} />
          <Route path="/Register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    );
}
export default App;
