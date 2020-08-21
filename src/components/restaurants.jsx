import React, { Component } from "react";
import RestaurantTable from "./restaurantTable";
import _ from "lodash";

class Restaurants extends Component {
  state = {};

  restaurantsByCuisine = (cuisine) => {
    const { restaurants } = this.props;
    if (!restaurants[0].cuisine || !cuisine._id) return null;

    const restaurantsByCuisine = [];
    for (let r = 0; r < restaurants.length; r++) {
      const validEntry = restaurants[r].cuisine.filter(
        (c) => c._id === cuisine._id
      );
      if (validEntry.length > 0) restaurantsByCuisine.push(restaurants[r]);
    }
    if (restaurantsByCuisine.length > 0) return restaurantsByCuisine;
    return null;
  };

  renderCuisines = () => {
    const { cuisines } = this.props;

    const restaurants = cuisines.map((c) => (
      <div key={c._id}>
        <RestaurantTable
          cuisine={c}
          restaurantsByCuisine={this.restaurantsByCuisine(c)}
        />
      </div>
    ));
    return restaurants;
  };

  render() {
    const { restaurants } = this.props;
    // console.log(restaurants[0]);
    return <div>{this.renderCuisines()}</div>;
  }
}

export default Restaurants;
