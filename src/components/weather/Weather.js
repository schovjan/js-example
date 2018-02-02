import React from 'react'
import {
	Table, Button, Container, Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle
} from 'reactstrap'
import WeatherInfo from './WeatherInfo'
import { loadWeather } from '../../rest'

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: null,
		};
	}

	componentDidMount() {
		loadWeather(
			function (weatherData) {
				setTimeout(
					this.setState.bind(this, { weather: weatherData }),
					3000
				)
			}.bind(this)
		)
	}

	parseImageUrl() {
		if (!this.state.weather) {
			return null;
		}

		const regex = /.*<img src="(.*)"\/>/;
		const matched = this.state.weather.query.results.channel.item.description.match(regex);
		const imageUrl = matched && matched[1];
		return imageUrl;
	}

	render() {
		const imageUrl = this.parseImageUrl();
		return (
			<div>
				<Card>
					<CardBody>
						<CardTitle>Weather in Prague</CardTitle>
						<CardSubtitle>From Yahoo APIs</CardSubtitle>
						{!this.state.weather
							? <div>Loading weather info...</div>
							: <CardText><WeatherInfo data={this.state.weather.query.results.channel.item.condition} /></CardText>
						}
					</CardBody>
					{imageUrl && <CardImg top src={imageUrl} style={{ height: '5rem', width: '5rem' }} />}
				</Card>
			</div>
		);
	}
}

export default Weather;
