import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { Container, Row, Col } from 'react-bootstrap';
import { pageTransition, pageVariants } from './animations/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { RepoTable } from './table/RepoTable'


class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="contact">
				<h1>
					<Fade bottom cascade>
						{" "}
						Contact.
					</Fade>
				</h1>
				<Fade bottom>
					<div className="contact-content">
						<h1>
							Lets solve a problem<br></br>
							<span className="amazing-color">together</span>
						</h1>
						<a
							href={`mailto:${data.contactEmail}`}
							className="email"
							
						>
							{data.contactEmail}
						</a>
						<ul className="social">
							{data.social.map((link, index) => (
								<li key={index}>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={link.url}
									>
										{link.name}
									</a>
								</li>
							))}
							
						</ul>
						
					</div>
				</Fade>
				<span className="footer">
					{" "}
							<p className="footer">{data.copyWright}</p>

				</span>
			</div>
		);
	}
}

export default Contact;
