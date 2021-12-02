import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Home from "./components/Home/Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Order/Order";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
