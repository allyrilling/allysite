// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Nav from './components/Nav';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PageNotFound from './components/PageNotFound';
import ProjectMaxi from './components/ProjectMaxi';
import icon from './images/penguinicon.svg';
import favicon from './images/mylogo.svg';
import ovlogo from './images/ovLogo.svg';
import jslogo from './images/jslogo.svg';
import reactlogo from './images/reactlogo.svg';
import rnlogo from './images/rnlogo.svg';
import dialogflowlogo from './images/dflogo.svg';
import lightyearicon from './images/lightyearicon.svg';
import iplogo from './images/iplogo.svg';
import gralogo from './images/gralogo.svg';
import appStoreIcon from './images/as.svg';
import gitHubIcon from './images/viewongithub.svg';
import jsImg from './images/jsimg.png';
import reactDemo from './files/ReactDemo.mp4';
import rnFigmaDemo from './files/rnfigmademo.mp4';
import rnDemo from './files/rndemo.MP4';
import dfDemo from './files/dfdemo.mp4';
import ss_home_1_0 from './images/penguinv1.png';
import ss_home_1_1 from './images/penguinv1.1.png';
import ss_home_1_2 from './images/penguinv1.2.png';
import zip_1_0 from './files/screenshots-1.0.zip';
import zip_1_1 from './files/screenshots-1.1.zip';
import zip_1_2 from './files/screenshots-1.2.zip';
import lightyeardemo from './files/lightyeardemo.mp4';
import trackCow from './files/TrackCow.mp4';
import snowboarding from './files/Snowboarding.mp4';
import origamiBird from './files/OrigamiBird.mp4';

function App() {
	return (
		<div className='App' id='page-container'>
			<Router>
				<div id='content-wrap'>
					<Navigation />
					<Switch>
						<Route path='/' exact component={() => <Home />} />
						<Route path='/website' exact component={() => <Home />} />
						<Route path='/home' exact component={() => <Home />} />
						<Route path='/resume' exact component={() => <Resume />} />
						<Route path='/projects' exact component={() => <Projects />} />
						<Route path='/privacypolicy' exact component={() => <PrivacyPolicy />} />
						<Route
							path='/projects/penguinworkouts'
							exact
							component={() => (
								<ProjectMaxi
									title='Penguin Workouts'
									showPrivacyPolicy={true}
									link='https://apps.apple.com/us/app/penguin-workouts/id1534463056?itsct=apps_box&amp;itscg=30200'
									logo={appStoreIcon}
									projectIcon={icon}
									aboutThe='About the App'
									linkClass='linkPenguin'
									class={'penguinContainer'}
									description='Penguin Workouts is a workout app that allows users to create quick workouts from a range of exercises. Users can add their own exercises and choose the number of exercises in each workout. The app includes upper body, lower body, hips, and core exercises. Additionally, Penguin Workouts comes with nine beautiful themes.'
									technologies={
										<ul>
											<li>Swift: backend and logic</li>
											<li>SwiftUI: frontend</li>
											<li>Figma: design and marketing materials</li>
										</ul>
									}
									extras={
										<Col>
											<Row style={{ marginTop: '6px', marginBottom: '6px' }} className='penguinContainer'>
												<h1>Versions</h1>
											</Row>
											<Row>
												<Col className='penguinContainer'>
													<h2>v1.2</h2>
													<p>
														Download images{' '}
														<a style={{ color: '#F2536E' }} href={zip_1_2} download='PenguinWorkouts-1.2.zip'>
															here
														</a>
														.
													</p>
													<img src={ss_home_1_2} width='300px'></img>
												</Col>

												<Col className='penguinContainer' style={{ marginLeft: '6px', marginRight: '6px' }}>
													<h2>v1.1</h2>
													<p>
														Download images{' '}
														<a style={{ color: '#F2536E' }} href={zip_1_1} download='PenguinWorkouts-1.1.zip'>
															here
														</a>
														.
													</p>
													<img src={ss_home_1_1} width='200px'></img>
												</Col>

												<Col className='penguinContainer'>
													<h2>v1.0</h2>
													<p>
														Download images{' '}
														<a style={{ color: '#F2536E' }} href={zip_1_0} download='PenguinWorkouts-1.0.zip'>
															here
														</a>
														.
													</p>
													<img src={ss_home_1_0} width='200px'></img>
												</Col>
											</Row>
										</Col>
									}
								/>
							)}
						/>
						<Route
							path='/projects/lightyear'
							exact
							component={() => (
								<ProjectMaxi
									title='Lightyear'
									showPrivacyPolicy={true}
									link='https://apps.apple.com/us/app/lightyear-solar-clock/id1580773908'
									logo={appStoreIcon}
									projectIcon={lightyearicon}
									aboutThe='About the App'
									linkClass='linkLightyear'
									class={'lightyearContainer'}
									description={[
										'Lightyear is a utility that visualizes the current sunrise, sunset, and daylight hours. It shows the amount of daylight gained or lost over the last day, week, and month. Lightyear uses data from the ',
										<a href='https://sunrise-sunset.org' style={{ color: '#1D96FA' }}>
											{' '}
											sunrise-sunset.org{' '}
										</a>,
										' API.',
									]}
									technologies={
										<ul>
											<li>Swift: backend and logic</li>
											<li>SwiftUI: frontend</li>
											<li>
												<a href='https://sunrise-sunset.org' style={{ color: '#1D96FA' }}>
													{' '}
													sunrise-sunset.org{' '}
												</a>
												API: data source
											</li>
											<li>Figma: design and marketing materials</li>
										</ul>
									}
									extras={
										<Col className='lightyearContainer'>
											<Row>
												<h1>Implementation</h1>
											</Row>
											<Row>
												<iframe width='750' height='450' src={lightyeardemo} />
											</Row>
										</Col>
									}
								/>
							)}
						/>
						<Route
							path='/projects/options-visualizer'
							exact
							component={() => (
								<ProjectMaxi
									title='Options Visualizer'
									subtitle={
										<a href='https://options-visualizer.web.app'>
											<h3 className='linkOV'>Click here to visit the site.</h3>
										</a>
									}
									link='https://github.com/allyrilling/options-visualizer'
									logo={gitHubIcon}
									projectIcon={ovlogo}
									aboutThe='About the Site'
									class={'ovContainer'}
									description={[
										'Options Visualizer is a tool to visualize the payoff graphs of different options spreads. It also features graphs of popular options spreads. The goal of this project was to improve upon the Excel sheet my Financial Derivatives professor used in class.',
									]}
									technologies={
										<ul>
											<li>JavaScript: backend</li>
											<li>React-Bootstrap: frontend</li>
											<li>ReactJS</li>
											<li>Firebase: hosting</li>
											<li>Figma: design and icons</li>
										</ul>
									}
									extras={
										<Col className='ovContainer'>
											<Row>
												<h1>
													Click{' '}
													<a href='https://options-visualizer.web.app' style={{ color: '#fa1d1d' }}>
														here
													</a>{' '}
													to visit the site.
												</h1>
											</Row>
											<Row></Row>
										</Col>
									}
								/>
							)}
						/>
						<Route
							path='/projects/site'
							exact
							component={() => (
								<ProjectMaxi
									title='This Site'
									link='https://github.com/allyrilling/website'
									logo={gitHubIcon}
									projectIcon={favicon}
									aboutThe='About the Site'
									class={'siteContainer'}
									description={
										'This is my personal portfolio website. Here you can find links to my GitHub and LinkedIn, view and download my resume, see my projects, and email me. Thanks for visiting!'
									}
									technologies={
										<ul>
											<li>JavaScript: backend</li>
											<li>React-Bootstrap: frontend</li>
											<li>ReactJS</li>
											<li>Firebase: hosting</li>
											<li>Figma: design and icons</li>
										</ul>
									}
								/>
							)}
						/>
						<Route
							path='/projects/javascript'
							exact
							component={() => (
								<ProjectMaxi
									title='JavaScript ɑ/β'
									link='https://github.com/CS571/js-beta-s22-allyrilling'
									logo={gitHubIcon}
									projectIcon={jslogo}
									aboutThe='About the Project'
									description={['The goal of this project was to create a webpage with JavaScript functionality and style it with Bootstrap CSS.']}
									class={'jsContainer'}
									technologies={
										<ul>
											<li>JavaScript: backend</li>
											<li>Bootstrap: frontend</li>
											<li>Figma: prototype</li>
										</ul>
									}
									extras={
										<Container>
											<Col>
												<Row className='jsContainer'>
													<Col>
														<h1>Prototype</h1>
														<p>
															View full screen prototype{' '}
															<a
																style={{ color: '#F7DF1E' }}
																href='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLydookNshs1dvt0unjOco6%2FCS571-JavaScript-Beta%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D339%252C362%252C0.34%26scaling%3Dscale-down'
															>
																here
															</a>
															.
														</p>
													</Col>
													<Col>
														<iframe
															width='800'
															height='450'
															src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLydookNshs1dvt0unjOco6%2FCS571-JavaScript-Beta%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D339%252C362%252C0.34%26scaling%3Dscale-down'
															allowfullscreen
														></iframe>
													</Col>
												</Row>
												<p></p>
												<Row className='jsContainer'>
													<Col>
														<h1>Implementation</h1>
													</Col>
													<Col>
														<img src={jsImg} width='750'></img>
													</Col>
												</Row>
											</Col>
										</Container>
									}
								/>
							)}
						/>
						// TODO: add a "main features" tag
						<Route
							path='/projects/react'
							exact
							component={() => (
								<ProjectMaxi
									title='React ɑ/β'
									link='https://github.com/CS571/react-beta-s22-allyrilling'
									logo={gitHubIcon}
									projectIcon={reactlogo}
									aboutThe='About the Project'
									class={'reactContainer'}
									description={[
										'This project is course management app. The React application pulls course data from the UW-Madison course database and loads it into the interface. State is preserved across tabs and interactions are handled using JavaScript.',
									]}
									technologies={
										<ul>
											<li>JavaScript: backend</li>
											<li>React-Bootstrap: frontend</li>
											<li>ReactJS</li>
											<li>Figma: prototype</li>
										</ul>
									}
									extras={
										<Container>
											<Row className='reactContainer'>
												<Col>
													<h1>Prototype</h1>
													<p>
														View full screen prototype{' '}
														<a
															style={{ color: '#53C1DE' }}
															href='https://www.figma.com/proto/rZWgf3fqn83YPhj2QrItiP/CS571-ReactBeta?embed_host=share&kind=&node-id=20%3A421&page-id=0%3A1&scaling=scale-down&starting-point-node-id=20%3A421'
														>
															here
														</a>
														.
													</p>
												</Col>
												<Col>
													<iframe
														width='800'
														height='450'
														src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrZWgf3fqn83YPhj2QrItiP%2FCS571-ReactBeta%3Fpage-id%3D0%253A1%26node-id%3D20%253A421%26scaling%3Dscale-down%26starting-point-node-id%3D20%253A421'
														allowfullscreen
													></iframe>
												</Col>
											</Row>
											<p></p>
											<Row className='reactContainer'>
												<Col>
													<h1>Implementation</h1>
												</Col>
												<Col>
													<iframe width='750' height='450' src={reactDemo} />
												</Col>
											</Row>
										</Container>
									}
								/>
							)}
						/>
						<Route
							path='/projects/reactnative'
							exact
							component={() => (
								<ProjectMaxi
									title='React Native ɑ/β'
									link='https://github.com/CS571/react-native-alpha-s22-allyrilling'
									logo={gitHubIcon}
									projectIcon={rnlogo}
									aboutThe='About the Project'
									class={'rnContainer'}
									description={[
										'This is a fitness tracking app built with React Native. Users can log into their account and view historical workouts data. The prototype shows the intended user interface; however, time constraints restricted the amount of user interface polishing done. Users can view, add, edit, and delete workouts and view and edit their account data. ',
									]}
									technologies={
										<ul>
											<li>JavaScript: backend</li>
											<li>React-Bootstrap: frontend</li>
											<li>React Native</li>
											<li>Figma: prototype</li>
										</ul>
									}
									extras={
										<Container>
											<Row className='rnContainer'>
												<Col>
													<h1>Prototype</h1>
													<p>
														View full screen prototype{' '}
														<a
															style={{ color: '#61DAFB' }}
															href='https://www.figma.com/proto/WQ5DrKYANTxJIJr6Et2UrU/CS571-ReactNativeBeta?kind=&node-id=23%3A368&page-id=0%3A1&scaling=scale-down&starting-point-node-id=23%3A368&viewport=480%2C242%2C0.18'
														>
															here
														</a>
														.
													</p>
												</Col>
												<Col>
													<iframe
														width='800'
														height='450'
														src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWQ5DrKYANTxJIJr6Et2UrU%2FCS571-ReactNativeBeta%3Fpage-id%3D0%253A1%26node-id%3D23%253A368%26viewport%3D480%252C242%252C0.18%26scaling%3Dscale-down%26starting-point-node-id%3D23%253A368'
														allowfullscreen
													></iframe>
													<iframe width='800' height='450' src={rnFigmaDemo}></iframe>
												</Col>
											</Row>
											<p></p>
											<Row className='rnContainer'>
												<Col>
													<h1>Implementation</h1>
												</Col>
												<Col>
													<iframe width='750' height='450' src={rnDemo} />
												</Col>
											</Row>
										</Container>
									}
								/>
							)}
						/>
						<Route
							path='/projects/dialogflow'
							exact
							component={() => (
								<ProjectMaxi
									title='Dialogflow'
									link='https://github.com/CS571/dialogflow-s22-allyrilling'
									logo={gitHubIcon}
									projectIcon={dialogflowlogo}
									aboutThe='About the Project'
									class={'dfContainer'}
									description={[
										'This project is a Dialogflow chatbot integrated into a store website. Using the chatbot, users can log into the website, ask questions about products and categories, navigate the website, and checkout. The chatbot parses natural language input and chooses the best output from pre-specified options.',
									]}
									technologies={
										<ul>
											<li>JavaScript: backend</li>
											<li>Dialogflow: frontend</li>
										</ul>
									}
									extras={
										<Container>
											<Row className='dfContainer'>
												<Col>
													<h1>Implementation</h1>
												</Col>
												<Col>
													<iframe width='800px' height='500px' src={dfDemo} />
												</Col>
											</Row>
										</Container>
									}
								/>
							)}
						/>
						<Route
							path='/projects/cs570'
							exact
							component={() => (
								<ProjectMaxi
									title='High Fidelity Prototypes'
									projectIcon={iplogo}
									aboutThe='About the Project'
									class={'ipContainer'}
									hideLinks={true}
									description={[
										'Both of the following prototypes are built in Figma and are interactive. The first prototype is for a new video streaming app. It was built with feedback from real users gathered in user interviews. The second is a website for an online grocery delivering service and exemplifies the user flow for ordering groceries online.',
									]}
									technologies={
										<ul>
											<li>Figma: design and interactive prototypes</li>
										</ul>
									}
									extras={
										<Container>
											<Row className='ipContainer'>
												<Col>
													<h1>YouMax</h1>
													<h4>Video streaming app</h4>
													<p>
														View full screen prototype{' '}
														<a
															style={{ color: '#7EFFE0' }}
															href='https://www.figma.com/proto/wzqDP1h3h0lLoNTOdIB8vl/CS570-CulturalProbe?kind=&node-id=28%3A2&page-id=0%3A1&starting-point-node-id=28%3A2'
														>
															here
														</a>
														.
													</p>
												</Col>
												<Col>
													<iframe
														width='800'
														height='450'
														src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwzqDP1h3h0lLoNTOdIB8vl%2FCS570-CulturalProbe%3Fpage-id%3D0%253A1%26node-id%3D28%253A2%26starting-point-node-id%3D28%253A2'
														allowfullscreen
													></iframe>
												</Col>
											</Row>
											<p></p>
											<Row className='ipContainer'>
												<Col>
													<h1>Voodsel</h1>
													<h4>Online grocery ordering service</h4>
													<p>
														View full screen prototype{' '}
														<a
															style={{ color: '#7EFFE0' }}
															href='https://www.figma.com/proto/U5RQwonAfPai8a1MVHrq7o/Interim-Presentation?kind=&node-id=86%3A1728&page-id=0%3A1&starting-point-node-id=86%3A1728'
														>
															here
														</a>
														.
													</p>
												</Col>
												<Col>
													<iframe
														width='800'
														height='450'
														src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FU5RQwonAfPai8a1MVHrq7o%2FInterim-Presentation%3Fpage-id%3D0%253A1%26node-id%3D86%253A1728%26starting-point-node-id%3D86%253A1728'
														allowfullscreen
													></iframe>
												</Col>
											</Row>
										</Container>
									}
								/>
							)}
						/>
						<Route
							path='/projects/cs559'
							exact
							component={() => (
								<ProjectMaxi
									title='Graphics Projects'
									projectIcon={gralogo}
									aboutThe='About the Projects'
									class={'graContainer'}
									hideLinks={true}
									description={
										'These are project made for a computer graphics class at UW-Madison. The Track Cow is a basic first project. Snowboarding uses more advanced concepts like camera movement and 3D objects. We finished the semester learning about WebGL and shades. Origami Bird incorporates these as well as advanced camera movements and textures.'
									}
									technologies={
										<ul>
											<li>JavaScript: logic</li>
											<li>HTML / CSS: layout and style</li>
											<li>WebGL: graphics framework</li>
										</ul>
									}
									extras={
										<Container>
											<Row className='graContainer'>
												<Col>
													<h1>Origami Bird</h1>
												</Col>
												<Col>
													<iframe width='800px' height='500px' src={origamiBird} />
												</Col>
											</Row>
											<p></p>
											<Row className='graContainer'>
												<Col>
													<h1>Snowboarding</h1>
												</Col>
												<Col>
													<iframe width='800px' height='500px' src={snowboarding} />
												</Col>
											</Row>
											<p></p>
											<Row className='graContainer'>
												<Col>
													<h1>Track Cow</h1>
												</Col>
												<Col>
													<iframe width='800px' height='500px' src={trackCow} />
												</Col>
											</Row>
										</Container>
									}
								/>
							)}
						/>
						<Route path='*' component={PageNotFound} />
					</Switch>
				</div>
				<div id='footer'>
					{' '}
					<Footer />{' '}
				</div>
			</Router>
		</div>
	);
}

export default App;
