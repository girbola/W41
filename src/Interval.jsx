import React, { useState, useEffect } from 'react';
import './Interval.css';

const Interval = () => {
	const [interval, setInterval] = useState();

	// Formats one integer in two digits and returns a string
	function formatTwoDigits(value) {
		if (value < 10) {
			return '0' + value;
		}
		return value;
	}
	function formatMillisTwoDigits(value) {
		if (value < 100 && value > 9) {
			return '0' + value;
		} else if (value < 10 && value >= 0) {
			return '00' + value;
		}
		return value;
	}
	function startDateRecorder() {
		var d = new Date();
		var hour = formatTwoDigits(d.getHours());

		var min = formatTwoDigits(d.getMinutes());
		var sec = formatTwoDigits(d.getSeconds());
		var millis = formatMillisTwoDigits(d.getMilliseconds());
		setInterval(
			<div id="timeInterval">
				{hour}:{min}:{sec}-{millis}
				<br></br>
				{interval}
			</div>
		);
	}

	return (
		<div>
			<button onClick={startDateRecorder}>Button</button>
			<div>{interval}</div>
		</div>
	);
};

export default Interval;
