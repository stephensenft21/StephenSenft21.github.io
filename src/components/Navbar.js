import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './navBar.css'
class Navbar extends Component {
	state = {};
	scrollToTop = () => {
		scroll.scrollToTop();
	};
	render() {
		return (

				
				<nav className="main-Nav">
				<div className="logo">
					<img src={require("../images/S.png")} alt="logo" width="130" height="130" />
				</div>
					<div>
						<ul className="">
							<li>
								<Link
									className="link hoverable"
									activeClass="active"
									to="/"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									onClick={this.scrollToTop}
								>
									Home
						</Link>
							</li>
							<li>
								<Link
									className="link hoverable"
									activeClass="active"
									to="about"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									About
						</Link>
							</li>
							<li>
								<Link
									className="link hoverable"
									activeClass="active"
									to="work"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									Work
						</Link>
							</li>
							<li>
								<Link
									className="link hoverable"
									activeClass="active"
									to="repos"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									Repos
						</Link>
							</li>
							<li>
								<Link
									className="link hoverable"
									activeClass="active"
									to="contact"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									Contact
						</Link>
							</li>
						</ul>
					</div>
				</nav>
		);
	}
}

export default Navbar;
