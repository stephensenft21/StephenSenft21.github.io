import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";
import { SocialIcon } from 'react-social-icons';

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
					<footer>
						<div class="jumbotron jumbotron-fluid bg-white mr-5 ml-5 p-4 mt-5 mb-0">
							<div className="container mr-0" style={{ display: "flex", justifyContent: "flex-end", alignItems:"space-between" }}>
								<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0	">
									<div className="card bg-white border-0">
										<div className="card-body text-center">
											<h5 className="card-title text-grey display-4 pb-3" style={{ fontSize: "25px" }}>Social Media</h5>
											<div>
											<SocialIcon url="https://www.facebook.com/stephen.senft.3" className="hoverable m-2 " />
											<SocialIcon url="https://twitter.com/stephensenft" className="hoverable m-2 " />
											<SocialIcon url="https://www.instagram.com/stephen_s3nft/" className="hoverable m-2 " />
											<SocialIcon color={"#f1f8e9"} url="https://www.linkedin.com/in/stephen-senft/" className="hoverable m-2 " />
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</footer>
				</span>
				<p className="footer">{data.copyWright}</p>
			</div>
		);
	}
}

export default Contact;



