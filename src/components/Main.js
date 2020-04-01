import React, { Component } from "react";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import data from "../Data";

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
								Work.
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
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/Casaasa.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/logo.png")}
											className="img_link NOCD_link"
											alt="CasaAszafran"
										/>
									</a>
									<h2 className="date">NOCD</h2>
									<h2 className="blurb">
									Is a full-stack application built using a React Client, C# ASP.NET Entity Framework, Identity, SQL Server, , Chart.js  Material UI, CSS  for styling. Db diagram for data architecture. This app is  designed to help therapists and their patients keep track of the short term and long term progress of a particular type of therapy for patients with Obsessive-Compulsive Disorder. The most common practice is Cognitive behavioral therapy (CBT), a type of psychotherapy, that is effective for many people with OCD. . This app will allow the patient to collect day to day data after they are exposed to what triggers their OCD and how they handle the situation.
									</h2>
									<div className="buttonDiv">
										<a
											className="header-title"
											href="https://github.com/stephensenft21/NOCD"
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className=" header-title">
												View Project
											</button>
										</a>
										{/* <a
											className="header-title"
											href=""
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className="Case Study">
												View Prototype
											</button>
										</a> */}
									</div>
								</div>
							</div>
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
									<h2 className="blurb">React-based mobile first single page application that helps users find casual date spots in the Nashville area. Uses Zomato's API for persistant data.  Users are able to save favorite locations, add comments with full-CRUD functionality and delete favorite locations. Implemented functional components using some React Hooks to effect the state of the views.
								</h2>
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
							{/* <div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/Hitpan.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/hermes-rivera-zQNyuNLYV6c-unsplash.jpg")}
											className="img_link"
											alt="Hitpan"
										/>
									</a>
									<h2 className="date">Quick&Cheezy</h2>
									<h2 className="blurb">
							
									</h2>
									<div className="buttonDiv">
										<a
											className="header-title"
											href="https://www.figma.com/proto/zktBnojjGWWSLoUR8YLjCv/Login?node-id=86183%3A1&viewport=770%2C306%2C0.20323914289474487&scaling=min-zoom"
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className=" header-title">
												View Project
											</button>
										</a>
										<a
											className="header-title"
											href="https://github.com/sageklein/Hit-Pan/blob/master/README.md"
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className="Case Study">
												View Prototype
											</button>
										</a>
									</div>
								</div>
							</div>
							</div> */}
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
									<h4 className="prototype-disclaimer">(Prototype designed by our UI/UX team)</h4><br></br>
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
