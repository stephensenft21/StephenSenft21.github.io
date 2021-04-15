import { Route } from "react-router-dom";
import React, { Component } from "react";

import Home from "./components/Home";

export default class ApplicationViews extends Component {
	render() {
		return (
			<>
				<Route
					exact
					path="/"
					render={props => {
						return <Home {...props} />;
					}}
				/>
			</>
		);
	}
}
