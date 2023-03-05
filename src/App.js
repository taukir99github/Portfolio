import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Porfolio from "./Components/Porfolio";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Porfolio" exact component={Porfolio} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Contact" exact component={Contact} />
        </div><img src="" alt="" sizes="" srcset="" />
      
    </Router>
  );
}

export default App;
