import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


//Takes data from api and gets average value for temp, pressure and humidity.
//Also injects data into Sparkline chart. 
function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		<div className="charts">
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type='avg' />
			</Sparklines>
			<div className="average">average: {average(props.data)} {props.units}</div>
		</div>
	);
}