import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ApplicationViews from "../src/ApplicationViews";

function App() {

	const [loading, setloading] = useState(true);
	const [repos, setRepos] = useState([{}])

	useEffect(() => {
		let mounted = true;

		fetch("https://api.github.com/users/StephenSenft21/repos?per_page=10")
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
