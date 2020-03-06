import React, { Component } from "react";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";


class Home extends Component {
	render() {
		return (
			<>

					<Navbar />
					<Main />
					<Contact />

			</>
		);
	}
}

export default Home;
