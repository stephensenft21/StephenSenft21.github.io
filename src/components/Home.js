import React, { Component } from "react";
import Main from "../components/Main";
import Contact from "../components/Contact";


class Home extends Component {
	render() {
		return (
			<>
					<Main repos={this.props.repos} />
					<Contact  repos={this.props.repos}/>
			</>
		);
	}
}

export default Home;
