import React, { Component } from "react";
import Header from "./Header";
import { Container, Row, Col } from 'react-bootstrap';
import { pageTransition, pageVariants } from './animations/animations';
import { motion, AnimatePresence } from 'framer-motion';
import Fade from "react-reveal/Fade";
import { RepoTable } from './table/RepoTable'
import data from "../Data";
import { TherapyApplication } from './projects/NOCD'
import {FirstCake} from './projects/FirstCake'
class Main extends Component {
	state = {};
	render() {
		return (
			<div className="main-wraper">
				<Header />
				<div className="about-content">
					<div className="about">
						<h1>
							<Fade bottom cascade>
								About.
							</Fade>

						</h1>

						<Fade bottom>
							<div className="img">
								<div className="abouttext">
									<p>{data.abouttext}</p>
									<p>{data.abouttext2}</p>
								</div>
								<img
									src={require("../images/SnowBoardProfile.jpg")}
									className="picture"
									alt="Stephen Senft"
								/>
							</div>
						</Fade>
					</div>
				</div>
				<div className="work-content">
					<div className="work">
						<h1>
							<Fade bottom cascade>
								Latest Works.
							</Fade>
						</h1>
						<Fade bottom>
							<p className="intro-content">{data.intro}</p>
							<p className="intro-content">{data.intro2}</p>
							<p className="intro-content">{data.intro3}</p>
						</Fade>
					</div>
					<div className="allProjects">

						<Fade bottom>
							<TherapyApplication />
						</Fade>
						<Fade bottom>
							
						</Fade>
						<Fade bottom>
							<FirstCake/>
						</Fade>{" "}
						<Fade bottom>
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/Sidekick.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/BangazonDashboard.png")}
											className="img_link"
											alt="Sidekick"
										/>
									</a>
									<h5 className="prototype-disclaimer">(Prototype designed by our UI/UX team)</h5><br></br>
									<h2 className="date">Bangazon Workforce</h2>
									<h2 className="blurb">
										Bangozon Workforce is a full-stack application that myself and three others built using ADO.net, MVC, SQL server, Bootstrap,
										CSS. This application solved a problem allowing HR to on-board new employees.
										show employee information, assign a computer to employee and
										assign training programs to the employee if necessary.
									</h2>
									<div className="buttonDiv">
										<a
											className="header-title"
											href="https://github.com/nss-day-cohort-35-csharp/Workforce-Orange-Iguanas"
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className=" header-title">
												View Project
											</button>
										</a>
									</div>
								</div>
							</div>
						</Fade>
						<Fade bottom>
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/website35.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/website35.png")}
											className="img_link"
											alt="Cohort Website"
										/>
									</a>
									<h2 className="date">Cohort 35 Website</h2>
									<h2 className="blurb">
										My Classmates
									</h2>
									<div className="buttonDiv">
										<a
											className="header-title"
											href="https://nss-day-cohort-35.github.io/website/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className="Case Study">
												View Class Site
											</button>
										</a>
									</div>
								</div>
							</div>
					
						</Fade>
					</div>
						<div className="repos">
						<Fade bottom>
						<Container fluid>
								<motion.div
									initial="initial"
									animate="in"
									exit="out"
									variants={pageVariants}
									transition={pageTransition}>
									<Row className="justify-content-center">
										<Col lg={10} className="p-0">
											<div id="workGrid">
											<h1>Github Repositories</h1>
											<hr style={{ border: '1px solid black' }}
												initial={{ width: 0, marginRight: '100%' }} />
											<RepoTable repos={this.props.repos} />
												</div>
										</Col>
									</Row>
								</motion.div>
							</Container>
							</Fade>
							</div>
				</div>
			</div>
		);
	}
}

export default Main;
