import React, { Component } from "react";
import { getCuisines } from "../services/fakeCuisineService";
import { getRestaurants } from "../services/fakeRestaurantService";
import Restaurants from "./restaurants";

class Home extends Component {
  state = {
    cuisines: [],
    restaurants: [],
  };

  componentDidMount() {
    const cuisines = getCuisines();
    const restaurants = getRestaurants();
    this.setState({ restaurants, cuisines });
  }

  render() {
    const { cuisines, restaurants } = this.state;

    return (
      <div>
        <Restaurants cuisines={cuisines} restaurants={restaurants} />
      </div>
    );
  }
}

export default Home;
