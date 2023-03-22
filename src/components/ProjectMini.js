import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default class ProjectMini extends Component {
	render() {
		return (
			<Col align='center'>
				<img src={this.props.icon} width='150px' style={{ margin: 10 + 'px' }}></img>
				<h3>{this.props.name}</h3>
				<p>{this.props.description}</p>
			</Col>
		);
	}
}
