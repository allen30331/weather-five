import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Header from './header';
import Categories from './categories';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
      	<Header />
      	<SearchBar />
      	<Categories />
      	<WeatherList />
      </div>
    );
  }
}


