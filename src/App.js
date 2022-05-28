import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Products from './pages/Products';
import Checkout from './pages/Checkout';


function App() {
  return (

    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/checkout" exact component={Checkout}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
