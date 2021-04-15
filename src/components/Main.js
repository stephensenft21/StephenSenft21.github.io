import React, { Component } from "react";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import data from "../Data";
import {TherapyApplication} from './projects/NOCD'
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
							<TherapyApplication/>
						</Fade>
						<Fade bottom>
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/First (4).png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/First (4).png")}
											className="img_link First_Cake"
											alt="First Cake"
										/>
									</a>
									<h2 className="date">First Cake</h2>
									<h3 className="blurb">React-based mobile first single page application that helps users find casual date spots in the Nashville area. Uses Zomato's API for persistant data.  Users are able to save favorite locations, add comments with full-CRUD functionality and delete favorite locations. Implemented functional components using some React Hooks to effect the state of the views.
								</h3>
									<div className="buttonDiv">
										<a
											className="header-title"
											href="https://github.com/stephensenft21/First-Cake"
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
				</div>
			</div>
		);
	}
}

export default Main;
