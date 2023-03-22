import React from 'react'
import '../CSScomponents/Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import me from "../images/me.png"
import mail from "../images/mail.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

const Mailto = ( { email, subject = '', body = '', children } ) =>
{
    let params = subject || body ? '?' : '';
    if ( subject ) params += `subject=${ encodeURIComponent( subject ) }`;
    if ( body ) params += `${ subject ? '&' : '' }body=${ encodeURIComponent( body ) }`;

    return <a href={`mailto:${ email }${ params }`}>{children}</a>;
};

export default function Home ()
{
    return (
        <Container>
            <Row className="rowStyle">
                <Col><img className="mePictureCol" src={me} alt="Ally" /></Col>
                <Col>
                    <h1>Hello. My name is Ally.</h1>
                    <p>I am a computer science and finance double major at the University of Wisconsin - Madison interested in financial software development. I also enjoy designing, prototyping, and building user interfaces and experiences.</p>
                    <Row className='linkContainer'>
                        <Col className='iconCol'>
                            <a href='https://github.com/allyrilling'>
                                <img className='imgStyle' src={github}></img>
                            </a>
                        </Col>
                        <Col className='iconCol'>
                            <a href='https://www.linkedin.com/in/allyrilling/' >
                                <img className='imgStyle' src={linkedin}></img>
                            </a>
                        </Col>
                        <Col className='iconCol'>
                            <Mailto email='hello@allyrilling.com' obfuscate={true} >
                                <img className='imgStyle' src={mail}></img>
                            </Mailto>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

