// import React, { Component } from "react";
// // import Project from "./project";
// import Fade from "react-reveal/Fade";
// import data from "../Data";



// class Work extends Component {

// 	state = {};
// 	render() {

// 		return (
// 			<div className="workBg">
// 				<div className="work-heading">
// 					<Fade bottom cascade>
// 						Work.
// 					</Fade>
// 				</div>{" "}
// 				<Fade bottom>
// 					<div className="intro-content">
// 						<p>{data.intro}</p>
// 					</div>
// 				</Fade>
// 				<Fade bottom>
// 					<div className="allProjects">
// 						<a
// 							href={this.props.imageSrc}
// 							rel="noopener noreferrer"
// 							target="/bang"
// 						>
// 							<img
// 								className="project_img"
// 								src={this.props.imageSrc}
// 								alt={this.props.title}
// 							/>
// 						</a>
// 						<a
// 							href={this.props.imageSrc}
// 							rel="noopener noreferrer"
// 							target="/casaasa"
// 						>
// 							<img
// 								className="project_img"
// 								src={this.props.imageSrc}
// 								alt={this.props.title}
// 							/>
// 						</a>
// 						<a
// 							href={this.props.imageSrc}
// 							rel="noopener noreferrer"
// 							target="/sidekick"
// 						>
// 							<img
// 								className="project_img"
// 								src={this.props.imageSrc}
// 								alt={this.props.title}
// 							/>
// 						</a>
// 						<a
// 							href={this.props.imageSrc}
// 							rel="noopener noreferrer"
// 							target="/hitpan"
// 						>
// 							<img
// 								className="project_img"
// 								src={this.props.imageSrc}
// 								alt={this.props.title}
// 							/>
// 						</a>
// 					</div>
// 				</Fade>
// 				<div className="project_container">
// 					{data.projects.map(project => (
// 						<Project
// 							key={project.id}
// 							title={project.title}
// 							service={project.service}
// 							imageSrc={project.imageSrc}
// 							url={project.url}
// 						></Project>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Work;
