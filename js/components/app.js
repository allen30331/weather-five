import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Header from './header';
import Categories from './categories';


//Contains all components 
export default class App extends Component {
  render() {
    return (
      <div className="app-container">
      	<Header />
        <div className="app-body">
        	<SearchBar />
        	<Categories />
        	<WeatherList />
        </div>
      </div>
    );
  }
}


