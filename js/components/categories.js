import React from 'react';

//Categories for weather 
export default function Categories() {
	return (
		<div className="row categories">
			<div className="col-md-3">City</div>
			<div className="col-md-3">Temperature</div>
			<div className="col-md-3">Pressure</div>
			<div className="col-md-3">Humidity</div>
		</div>
	)
}