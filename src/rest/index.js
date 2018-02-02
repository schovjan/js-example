import axios from 'axios'

function handleError(error) {
	console.log(error);
}

export function get(url, callback) {
	axios.get(url)
		.then((response) => {
			console.log(response.data);
			callback(response.data);
		})
		.catch(function (error) {
			handleError(error);
		});
}

export function getPosts(callback) {
	get('https://jsonplaceholder.typicode.com/posts', callback);
}

export function loadWeather(callback) {
	const locationQuery = escape("select item from weather.forecast where woeid in (select woeid from geo.places where text='prague, cz') and u='c'");
	const locationUrl = "http://query.yahooapis.com/v1/public/yql?q=" + locationQuery + "&format=json";

	get(locationUrl, callback);
}