import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Search from "./components/search";
import NotFound from "./components/notFound";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    user: {
      shoppingCart: 0,
    },
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar shoppingCart={user.shoppingCart} />
        <Switch>
          <Route path="/search/:query" component={Search} />
          <Route path="/home" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
