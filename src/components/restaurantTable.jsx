import React, { Component } from "react";

class RestaurantTable extends Component {
  state = {};
  render() {
    const { cuisine, restaurantsByCuisine } = this.props;
    console.log(restaurantsByCuisine);
    return (
      <div>
        {cuisine.cuisine}
        {restaurantsByCuisine && restaurantsByCuisine[0].name}
      </div>
    );
  }
}

export default RestaurantTable;
