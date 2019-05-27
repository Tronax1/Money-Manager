import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./Components/Home Page/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import NavBar from "./Components/Nav Bar/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
