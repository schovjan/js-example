import React from 'react'
import {
	Table, Button, Container
} from 'reactstrap';
import axios from 'axios'
import { getPosts } from '../../rest'

class PostList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};

		this.handleLoad = this.handleLoad.bind(this);
	}

	handleLoad() {
		getPosts(
			function (data) {
				this.setState({ data: data });
			}.bind(this)
		);
	}

	render() {
		return (
			<Container>
				<Button onClick={this.handleLoad} color="primary">load data from external source</Button>
				<Table striped hover>
					<thead>
						<tr>
							<th>id</th>
							<th>title</th>
							<th>body</th>
							<th>userId</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((entry) => {
							return (
								<tr key={entry.id}>
									<td>{entry.id}</td>
									<td>{entry.title}</td>
									<td>{entry.id}</td>
									<td>{entry.userId}</td>
								</tr>);
						})}
					</tbody>
				</Table>
			</Container>
		);
	}
}

export default PostList
