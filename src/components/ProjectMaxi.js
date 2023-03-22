import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class ProjectMaxi extends Component {
	render() {
		return (
			<Container>
				<Row>
					<a href='/projects'>
						<h4>{'⬅️ Back'}</h4>
					</a>
				</Row>
				<p></p>
				<Row className={this.props.class}>
					<Col style={{ maxWidth: 'fit-content' }}>
						<img className='lightyearIconPicture' src={this.props.projectIcon} />
					</Col>
					<Col>
						<h1 className='appTitle'>{this.props.title}</h1>
					</Col>
				</Row>
				<p></p>
				<Row>
					<Col className={this.props.class} style={{ marginRight: '10px' }}>
						<h2>{this.props.aboutThe}</h2>
						<p>{this.props.description}</p>
					</Col>
					<Col className={this.props.class} style={{ maxWidth: 'fit-content', marginRight: '10px' }}>
						<h2>Technologies Used</h2>
						<p>{this.props.technologies}</p>
					</Col>
					{!this.props.hideLinks ? (
						<Col className={this.props.class} style={{ maxWidth: 'fit-content' }}>
							<h3>Links</h3>
							<ul>
								{this.props.showPrivacyPolicy ? (
									<li>
										<a href='PrivacyPolicy'>
											<h3 className={this.props.linkClass}>Privacy Policy</h3>
										</a>
									</li>
								) : (
									<></>
								)}
								<li>
									<a href={this.props.link} className='appStore'>
										<img className='appStore' src={this.props.logo} />
										{/* either github or app store logo */}
									</a>
								</li>
							</ul>
						</Col>
					) : (
						<></>
					)}
				</Row>
				<p></p>
				<Row>{this.props.extras}</Row>
			</Container>
		);
	}
}
