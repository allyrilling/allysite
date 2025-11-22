import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../CSScomponents/DesignPortfolio.css';
import jsImg from '../images/jsimg.png';
import ve1 from '../images/design/ve-1.png';
import ve2 from '../images/design/ve-2.png';
import ve3 from '../images/design/ve-3.png';
import ve4 from '../images/design/ve-4.png';
import ve5 from '../images/design/ve-5.png';
import ve6 from '../images/design/ve-6.png';
import ve7 from '../images/design/ve-7.png';
import ve8 from '../images/design/ve-8.png';
import loop1 from '../images/design/loop-1.png';
import loop2 from '../images/design/loop-2.png';
import loop3 from '../images/design/loop-3.png';
import loop4 from '../images/design/loop-4.png';
import loop5 from '../images/design/loop-5.png';
import loop6 from '../images/design/loop-6.png';
import loop7 from '../images/design/loop-7.png';
import loop8 from '../images/design/loop-8.png';

function DesignPortfolio() {
	const [veIndex, setVeIndex] = useState(0);
	const [loopIndex, setLoopIndex] = useState(0);
	const [flowerIndex, setFlowerIndex] = useState(0);
	const [finIndex, setFinIndex] = useState(0);

	return (
		<Container className='designPortfolioContainer'>
			{/* Visually Explained Project */}
			<Col className='box'>
				<Row className='projectHeader' style={{ borderColor: 'cyan' }}>
					<h2>Visually Explained</h2>
				</Row>
				<Row className='projectBody' style={{ borderColor: 'cyan' }}>
					<Carousel className='designCarousel' interval={5000} controls={false} indicators={false} activeIndex={veIndex} onSelect={setVeIndex}>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={ve1} alt='Visually Explained slide 1' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python Decorators - Visually Explained{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={ve2} alt='Visually Explained slide 2' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python Functions - Visually Explained (145k views){' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={ve3} alt='Visually Explained slide 3' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python Decorators - Visually Explained{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={ve4} alt='Visually Explained slide 4' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python if name == "main" - Visually Explained (406k views){' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={ve5} alt='Visually Explained slide 5' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python if name == "main" - Visually Explained (406k views){' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={ve6} alt='Visually Explained slide 6' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python Functions - Visually Explained (145k views){' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={ve7} alt='Visually Explained slide 7' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python Lambda Functions - Visually Explained (138k views){' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={ve8} alt='Visually Explained slide 8' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Python Functions - Visually Explained (145k views){' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
					<div className='carousel-controls-container'>
						<button className='carousel-control-prev' onClick={() => setVeIndex(veIndex === 0 ? 3 : veIndex - 1)}>
							<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						</button>
						<div className='carousel-indicators'>
							{[0, 1, 2, 3].map((idx) => (
								<button key={idx} type='button' className={veIndex === idx ? 'active' : ''} onClick={() => setVeIndex(idx)}></button>
							))}
						</div>
						<button className='carousel-control-next' onClick={() => setVeIndex(veIndex === 3 ? 0 : veIndex + 1)}>
							<span className='carousel-control-next-icon' aria-hidden='true'></span>
						</button>
					</div>
				</Row>
			</Col>

			{/* Loop Project */}
			<Col className='box loop-section'>
				<Row className='projectHeader' style={{ borderColor: '#DA63AC' }}>
					<h2>Loop</h2>
				</Row>
				<Row className='projectBody' style={{ borderColor: '#DA63AC' }}>
					<Carousel className='designCarousel' interval={5000} controls={false} indicators={false} activeIndex={loopIndex} onSelect={setLoopIndex}>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={loop1} alt='Loop slide 1' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
								<Col>
									<img className='carouselImage' src={loop2} alt='Loop slide 2' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={loop3} alt='Loop slide 3' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
								<Col>
									<img className='carouselImage' src={loop4} alt='Loop slide 4' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={loop5} alt='Loop slide 5' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
								<Col>
									<img className='carouselImage' src={loop6} alt='Loop slide 6' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={loop7} alt='Loop slide 7' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
								<Col>
									<img className='carouselImage' src={loop8} alt='Loop slide 8' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>Description placeholder text</div>
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
					<div className='carousel-controls-container'>
						<button className='carousel-control-prev' onClick={() => setLoopIndex(loopIndex === 0 ? 3 : loopIndex - 1)}>
							<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						</button>
						<div className='carousel-indicators'>
							{[0, 1, 2, 3].map((idx) => (
								<button key={idx} type='button' className={loopIndex === idx ? 'active' : ''} onClick={() => setLoopIndex(idx)}></button>
							))}
						</div>
						<button className='carousel-control-next' onClick={() => setLoopIndex(loopIndex === 3 ? 0 : loopIndex + 1)}>
							<span className='carousel-control-next-icon' aria-hidden='true'></span>
						</button>
					</div>
				</Row>
			</Col>

			{/* Flower Dictionary Project */}
			<Col className='box'>
				<Row className='projectHeader' style={{ borderColor: 'cyan' }}>
					<h2>Flower Dictionary</h2>
				</Row>
				<Row className='projectBody' style={{ borderColor: 'cyan' }}>
					<Carousel
						className='designCarousel'
						interval={5000}
						controls={false}
						indicators={false}
						activeIndex={flowerIndex}
						onSelect={setFlowerIndex}>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={jsImg} alt='Flower Dictionary slide 1' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 1{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={jsImg} alt='Flower Dictionary slide 2' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 2{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={jsImg} alt='Flower Dictionary slide 3' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 3{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={jsImg} alt='Flower Dictionary slide 4' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 4{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
					<div className='carousel-controls-container'>
						<button className='carousel-control-prev' onClick={() => setFlowerIndex(flowerIndex === 0 ? 1 : flowerIndex - 1)}>
							<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						</button>
						<div className='carousel-indicators'>
							{[0, 1].map((idx) => (
								<button key={idx} type='button' className={flowerIndex === idx ? 'active' : ''} onClick={() => setFlowerIndex(idx)}></button>
							))}
						</div>
						<button className='carousel-control-next' onClick={() => setFlowerIndex(flowerIndex === 1 ? 0 : flowerIndex + 1)}>
							<span className='carousel-control-next-icon' aria-hidden='true'></span>
						</button>
					</div>
				</Row>
			</Col>

			{/* FinTools Project */}
			<Col className='box'>
				<Row className='projectHeader' style={{ borderColor: 'cyan' }}>
					<h2>FinTools</h2>
				</Row>
				<Row className='projectBody' style={{ borderColor: 'cyan' }}>
					<Carousel className='designCarousel' interval={5000} controls={false} indicators={false} activeIndex={finIndex} onSelect={setFinIndex}>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={jsImg} alt='FinTools slide 1' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 1{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={jsImg} alt='FinTools slide 2' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 2{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={jsImg} alt='FinTools slide 3' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 3{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
								<Col>
									<img className='carouselImage' src={jsImg} alt='FinTools slide 4' />
									<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
										Video Title 4{' '}
										<a
											href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
											target='_blank'
											rel='noopener noreferrer'
											style={{ color: 'cyan', textDecoration: 'none' }}>
											(Link)
										</a>
									</div>
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
					<div className='carousel-controls-container'>
						<button className='carousel-control-prev' onClick={() => setFinIndex(finIndex === 0 ? 1 : finIndex - 1)}>
							<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						</button>
						<div className='carousel-indicators'>
							{[0, 1].map((idx) => (
								<button key={idx} type='button' className={finIndex === idx ? 'active' : ''} onClick={() => setFinIndex(idx)}></button>
							))}
						</div>
						<button className='carousel-control-next' onClick={() => setFinIndex(finIndex === 1 ? 0 : finIndex + 1)}>
							<span className='carousel-control-next-icon' aria-hidden='true'></span>
						</button>
					</div>
				</Row>
			</Col>
		</Container>
	);
}

export default DesignPortfolio;
