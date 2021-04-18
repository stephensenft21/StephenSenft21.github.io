import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ApplicationViews from "../src/ApplicationViews";

function App(props) {

	const [loading, setloading] = useState(true);
	const [repos, setRepos] = useState([{}])

	useEffect(() => {
		let mounted = true;

		fetch("https://api.github.com/users/StephenSenft21/repos?sort=date-desc&page=1&per_page=20")
			.then(res => res.json())
			.then((data) => {
				if (mounted) {
					setloading(false);
					setData(data);
				}
			});

		return function cleanup() {
			mounted = false
		}
	}, [])

	const setData = (repos) => {
		setRepos(repos)
	}
console.log("repos in appviews", repos)
	return (
		<>
			<ApplicationViews repos={repos} />
		</>
	);
}

export default App;
