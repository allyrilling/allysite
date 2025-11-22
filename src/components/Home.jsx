import React from 'react';
import '../CSScomponents/Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import me from '../images/me.png';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

const Mailto = ({ email, subject = '', body = '', children }) => {
	let params = subject || body ? '?' : '';
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

	return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export default function Home() {
	return (
		<Container>
			<Row className='rowStyle'>
				<Col>
					<img className='mePictureCol' src={me} alt='Ally' />
				</Col>
				<Col>
					<h1>Hello. My name is Ally.</h1>
					<p>
						I am a motion graphics designer and project manager at Visually Explained Education. I specialize in visual storytelling, animation, and
						interface-adjacent graphics, with experience translating complex concepts into clean, aesthetic visuals.
					</p>
					<p>
						I graduated from the University of Wisconsin - Madison with degrees in Computer Science and Finance. I'm passionate about design, data
						visualization, and creating intuitive user experiences.
					</p>
					<Row className='linkContainer'>
						<Col className='iconCol'>
							<a href='https://github.com/allyrilling'>
								<img className='imgStyle' src={github}></img>
							</a>
						</Col>
						<Col className='iconCol'>
							<a href='https://www.linkedin.com/in/allyrilling/'>
								<img className='imgStyle' src={linkedin}></img>
							</a>
						</Col>
						<Col className='iconCol'>
							<Mailto email='hello@allyrilling.com' obfuscate={true}>
								<img className='imgStyle' src={mail}></img>
							</Mailto>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}
