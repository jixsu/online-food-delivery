import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./common/searchBar";

class NavBar extends Component {
  state = {
    searchQuery: "",
  };

  handleSearchBar = (query) => {
    this.setState({ searchQuery: query });
  };

  handleSearch = (e) => {
    const { searchQuery } = this.state;
    e.preventDefault();
    console.log("submitted");
    window.location = "/search/" + searchQuery;
  };

  validateSearchButton = () => {
    const { searchQuery } = this.state;
    return searchQuery === "" ? true : false;
  };

  render() {
    const { searchQuery } = this.state;
    const { shoppingCart } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="btn btn-light" style={{ marginRight: 15 }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          Online Food Delivery
        </Link>

        <div className="navbar-nav ml-auto">
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={this.handleSearch}
          >
            <SearchBar value={searchQuery} onChange={this.handleSearchBar} />
            <button
              className="btn btn-light"
              disabled={this.validateSearchButton()}
              style={{ marginLeft: 5 }}
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
          <button className="btn btn-dark my-2" style={{ marginLeft: 15 }}>
            <span style={{ color: "white" }}>
              <i
                className="fa fa-shopping-basket"
                style={{ marginRight: 8 }}
              ></i>
              {shoppingCart}
            </span>
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;

{
  /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav> */
}
