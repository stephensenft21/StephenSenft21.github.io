import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";



class Header extends Component {
	state = {};

	render() {
		return (
			<div>
				<header>
					<h1>
						<Fade bottom cascade>
							<div className="name">
								{data.Showname ? data.name : null}
							</div>
						</Fade>
					</h1>
				</header>
				<Fade bottom>
					<div className="header-title1">
						<p>
							{data.headerTagline[0]}
							<br></br>
							{data.headerTagline[1]}
							<br></br>
							{data.headerTagline[2]}
						</p>
						<br></br>{" "}
					</div>
					<div className="header-title2">
						<a
							className="header-title"
							href={`mailto:${data.contactEmail}`}
							rel="noopener noreferrer"
							target="_blank"
						>
							<button className=" header-title">Contact</button>
						</a>
						<a
							className="header-title"
							href={`${data.resume}`}
							rel="noopener noreferrer"
							target="_blank"
						>
							<button className=" header-title ">Resume</button>
						</a>
					</div>
				</Fade>
			</div>
		);
	}
}

export default Header;
