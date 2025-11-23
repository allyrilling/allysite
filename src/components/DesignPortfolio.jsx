import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../CSScomponents/DesignPortfolio.css';
import { visuallyExplainedData, loopData, finToolsData } from '../data/designPortfolioData';
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
import fd1 from '../images/design/fd-1.png';
import fd2 from '../images/design/fd-2.png';
import fd3 from '../images/design/fd-3.png';
import fd4 from '../images/design/fd-4.png';
import ft1 from '../images/design/ft-1.png';
import ft2 from '../images/design/ft-2.png';
import ft3 from '../images/design/ft-3.png';
import ft4 from '../images/design/ft-4.png';

function DesignPortfolio() {
	const [veIndex, setVeIndex] = useState(0);
	const [loopIndex, setLoopIndex] = useState(0);
	const [flowerIndex, setFlowerIndex] = useState(0);
	const [finIndex, setFinIndex] = useState(0);

	// Map image names to actual imports
	const imageMap = {
		ve1: ve1,
		ve2: ve2,
		ve3: ve3,
		ve4: ve4,
		ve5: ve5,
		ve6: ve6,
		ve7: ve7,
		ve8: ve8,
		loop1: loop1,
		loop2: loop2,
		loop3: loop3,
		loop4: loop4,
		loop5: loop5,
		loop6: loop6,
		loop7: loop7,
		loop8: loop8,
		fd1: fd1,
		fd2: fd2,
		fd3: fd3,
		fd4: fd4,
		ft1: ft1,
		ft2: ft2,
		ft3: ft3,
		ft4: ft4,
	};

	return (
		<Container className='designPortfolioContainer'>
			{/* Visually Explained Project */}
			<Col className='box'>
				<div className='projectHeader' style={{ borderColor: 'cyan', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<h2 style={{ margin: 0 }}>Visually Explained</h2>
					<a
						href='https://www.youtube.com/@VisuallyExplainedEducation/featured'
						target='_blank'
						rel='noopener noreferrer'
						style={{
							backgroundColor: 'cyan',
							color: '#000',
							textDecoration: 'none',
							padding: '8px 16px',
							borderRadius: '5px',
							fontWeight: '500',
							display: 'inline-block',
							whiteSpace: 'nowrap',
							flexShrink: 0,
							width: 'auto',
						}}>
						View project
					</a>
				</div>
				<Row className='projectBody' style={{ borderColor: 'cyan' }}>
					<Carousel className='designCarousel' interval={5000} controls={false} indicators={false} activeIndex={veIndex} onSelect={setVeIndex}>
						{[0, 1, 2, 3].map((slideIndex) => (
							<Carousel.Item key={slideIndex}>
								<Row className='carouselRow'>
									{visuallyExplainedData.slice(slideIndex * 2, slideIndex * 2 + 2).map((item) => (
										<Col key={item.id}>
											<img className='carouselImage' src={imageMap[item.image]} alt={`Visually Explained slide ${item.id}`} />
											<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>
												{item.title} {item.views && `(${item.views})`}{' '}
												<a href={item.videoUrl} target='_blank' rel='noopener noreferrer' style={{ color: 'cyan', textDecoration: 'none' }}>
													(Link)
												</a>
											</div>
										</Col>
									))}
								</Row>
							</Carousel.Item>
						))}
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
				<div className='projectHeader' style={{ borderColor: '#DA63AC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<h2 style={{ margin: 0 }}>Loop</h2>
					<a
						href='/projects/loop'
						style={{
							backgroundColor: '#DA63AC',
							color: '#fff',
							textDecoration: 'none',
							padding: '8px 16px',
							borderRadius: '5px',
							fontWeight: '500',
							display: 'inline-block',
							whiteSpace: 'nowrap',
							flexShrink: 0,
							width: 'auto',
						}}>
						View project
					</a>
				</div>
				<Row className='projectBody' style={{ borderColor: '#DA63AC' }}>
					<Carousel className='designCarousel' interval={5000} controls={false} indicators={false} activeIndex={loopIndex} onSelect={setLoopIndex}>
						{[0, 1, 2, 3].map((slideIndex) => (
							<Carousel.Item key={slideIndex}>
								<Row className='carouselRow'>
									{loopData.slice(slideIndex * 2, slideIndex * 2 + 2).map((item) => (
										<Col key={item.id}>
											<img className='carouselImage' src={imageMap[item.image]} alt={`Loop slide ${item.id}`} />
											<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>{item.description}</div>
										</Col>
									))}
								</Row>
							</Carousel.Item>
						))}
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
			<Col className='box flower-dictionary-section'>
				<div className='projectHeader' style={{ borderColor: '#F8F9FA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<h2 style={{ margin: 0 }}>Flower Dictionary</h2>
					<a
						href='/projects/flowerdictionary'
						style={{
							backgroundColor: '#6c757d',
							color: '#fff',
							textDecoration: 'none',
							padding: '8px 16px',
							borderRadius: '5px',
							fontWeight: '500',
							display: 'inline-block',
							whiteSpace: 'nowrap',
							flexShrink: 0,
							width: 'auto',
						}}>
						View project
					</a>
				</div>
				<Row className='projectBody' style={{ borderColor: '#F8F9FA' }}>
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
									<img className='carouselImage' src={fd1} alt='Flower Dictionary slide 1' />
								</Col>
								<Col>
									<img className='carouselImage' src={fd2} alt='Flower Dictionary slide 2' />
								</Col>
							</Row>
						</Carousel.Item>
						<Carousel.Item>
							<Row className='carouselRow'>
								<Col>
									<img className='carouselImage' src={fd3} alt='Flower Dictionary slide 3' />
								</Col>
								<Col>
									<img className='carouselImage' src={fd4} alt='Flower Dictionary slide 4' />
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
			<Col className='box fintools-section'>
				<div className='projectHeader' style={{ borderColor: '#ff0000', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<h2 style={{ margin: 0 }}>FinTools</h2>
					<a
						href='/projects/fintools'
						style={{
							backgroundColor: '#ff0000',
							color: '#fff',
							textDecoration: 'none',
							padding: '8px 16px',
							borderRadius: '5px',
							fontWeight: '500',
							display: 'inline-block',
							whiteSpace: 'nowrap',
							flexShrink: 0,
							width: 'auto',
						}}>
						View project
					</a>
				</div>
				<Row className='projectBody' style={{ borderColor: '#ff0000' }}>
					<Carousel className='designCarousel' interval={5000} controls={false} indicators={false} activeIndex={finIndex} onSelect={setFinIndex}>
						{[0, 1].map((slideIndex) => (
							<Carousel.Item key={slideIndex}>
								<Row className='carouselRow'>
									{finToolsData.slice(slideIndex * 2, slideIndex * 2 + 2).map((item) => (
										<Col key={item.id}>
											<img className='carouselImage' src={imageMap[item.image]} alt={`FinTools slide ${item.id}`} />
											<div style={{ marginTop: '10px', fontSize: '18px', textAlign: 'center' }}>{item.caption}</div>
										</Col>
									))}
								</Row>
							</Carousel.Item>
						))}
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
