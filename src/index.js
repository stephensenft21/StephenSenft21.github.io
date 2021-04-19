import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";



ReactDOM.render(
	<Router>
		<Navbar />
		<App />
	</Router>,
	document.getElementById("root")
);
