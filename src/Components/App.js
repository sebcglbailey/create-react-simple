import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './App.css';

const App = () => {
	return(
		<Router>
			<div className={styles.container}>
				<h1 className={styles.h1}>This is a React App!</h1>
			</div>
		</Router>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);