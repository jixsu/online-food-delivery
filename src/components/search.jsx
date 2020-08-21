import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    const { match } = this.props;

    return <div>{match.params.query}</div>;
  }
}

export default Search;
