import React from 'react';
import '../CSScomponents/Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import me from '../images/me.png';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import youtube from '../images/yticon.svg';

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
						I am a <strong>motion graphics designer</strong> and <strong>project manager</strong> at{' '}
						<a href='https://www.youtube.com/@VisuallyExplainedEducation/featured' target='_blank' rel='noopener noreferrer'>
							Visually Explained Education
						</a>
						. I specialize in <strong>visual storytelling</strong>, with experience translating complex concepts into <strong>clean</strong>,{' '}
						<strong>approachable</strong>, <strong>aesthetic</strong> visuals. I also work as a <strong>research assistant</strong> for Professor
						Sebastien Plante, developing tools to process and analyze historical bond data.
					</p>
					<p>
						I graduated from the <strong>University of Wisconsin - Madison</strong> with degrees in <strong>Computer Science</strong> and{' '}
						<strong>Finance</strong>. I'm passionate about <strong>design</strong>, <strong>data visualization</strong>, and creating{' '}
						<strong>intuitive user experiences</strong>.
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
							<a href='https://www.youtube.com/@VisuallyExplainedEducation/featured' target='_blank' rel='noopener noreferrer'>
								<img className='imgStyle' src={youtube}></img>
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
