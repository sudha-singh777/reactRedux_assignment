import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

import Cart from './component/cart/Cart';
import Product from './component/product/Product';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Product}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

