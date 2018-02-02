function WeatherInfo(props) {
	return props.data.temp + '°C ' + props.data.text + ' ' + props.data.date;
}

export default WeatherInfo;