import React from "react";
import "./styles.css";

const API_KEY =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

export default class TypeHead extends React.Component {
  state = {
    cities: [],
    searchedCities: [],
    searchValue: ""
  };

  async componentDidMount() {
    const response = await fetch(API_KEY);
    const getCites = await response.json();
    this.setState({
      cities: [...getCites]
    });
  }

  handleSearch = e => {
    const filterCity = this.state.cities.filter(place => {
      const regex = new RegExp(e.target.value, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
    this.setState({
      searchedCities: [...filterCity],
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="search-form">
          <input
            type="text"
            className="search"
            placeholder="City or State"
            onChange={this.handleSearch}
          />
          <ul className="suggestions">
            {this.state.searchedCities.length <= 0 && (
              <React.Fragment>
                <li>Filter for a city</li>
                <li>or a state</li>
              </React.Fragment>
            )}
            {this.state.searchedCities.length > 0 &&
              this.state.searchedCities.map(city => {
                return (
                  <li key={city.rank}>
                    <span className="name">
                      {city.city}, {city.state}
                    </span>
                    <span className="population">{city.population}</span>
                  </li>
                );
              })}
          </ul>
        </form>
      </React.Fragment>
    );
  }
}
