import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


//Displays charts and values
class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		
		const temps = cityData.list.map(function(weather) {
			return (weather.main.temp * (9/5) - 459.67 );
		});

		const pressures = cityData.list.map(function(weather) {
			return weather.main.pressure;
		});

		const humidities = cityData.list.map(function(weather) {
			return weather.main.humidity;
		});

		const {lon, lat} = cityData.city.coord;

			
		return (
			<div className="city-data" key={name}>
				<div className="row data" >
					<div className="col-md-3 city-name"><p className="sub-cat">City</p>{name}</div>
					<div className="col-md-3"><p className="sub-cat">Temperature</p><Chart data={temps} color='orange' units='F' /></div>
					<div className="col-md-3"><p className="sub-cat">Pressure</p><Chart data={pressures} color='green' units='hPa' /></div>
					<div className="col-md-3"><p className="sub-cat">Humidity</p><Chart  data={humidities} color='black' units='%' /></div>
				</div>
			<div className="border"></div>
			</div>
		)
	}


	render() {

		return (
			<div>{this.props.weather.map(this.renderWeather)}</div>
		)

	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);