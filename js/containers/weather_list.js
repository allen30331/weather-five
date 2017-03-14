import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		//const temps = cityData.list.map(weather => weather.main.temp)
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

			//<p className="sub-cat">City</p>{name}
			console.log(lat, 'hello');
		return (
			<div key={name}>
				<div className="row data" >
					<div className="col-md-3 city-name"><p className="sub-cat">City</p>{name}</div>
					<div className="col-md-3"><p className="sub-cat">Temperature</p><Chart data={temps} color='orange' units='F' /></div>
					<div className="col-md-3"><p className="sub-cat">Pressure</p><Chart data={pressures} color='green' units='hPa' /></div>
					<div className="col-md-3"><p className="sub-cat">Humidity</p><Chart  data={humidities} color='black' units='%' /></div>
				</div>
			<div className="border"></div>
			</div>
		)
		// return (
		// 	<tr key={name}>
		// 			<td><h4>map</h4><GoogleMap lon={lon} lat={lat} /></td>
		// 			<td><h4>map</h4><Chart data={temps} color='orange' units='k' /></td>
		// 			<td><h4>map</h4><Chart data={pressures} color='green' units='hPa' /></td>
		// 			<td><h4>map</h4><Chart data={humidities} color='black' units='%' /></td>
		// 	</tr>	
		// );

		//<p className="sub-cat">City</p>{name}
	}


	render() {

		return (
			<div>{this.props.weather.map(this.renderWeather)}</div>
		)



		// return (
		// 	<table className='table table-hover'>
		// 		<thead>
		// 			<tr>
		// 				<th>City</th>
		// 				<th>Temperature (K)</th>
		// 				<th>Pressure (hPa)</th>
		// 				<th>Humidity (%)</th>
		// 			</tr>
		// 		</thead>
		// 		<tbody>
		// 			{this.props.weather.map(this.renderWeather)}
		// 		</tbody>
		// 	</table>	
		// );
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);