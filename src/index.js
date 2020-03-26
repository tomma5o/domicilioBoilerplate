import { h, Component } from 'preact';
import { Router } from 'preact-router';

import 'tailwindcss/dist/tailwind.min.css';

// Code-splitting is automated for routes
import Home from './routes/home.js';
import Form from './routes/form.js';

export default class App extends Component {
	
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Form path="/form/" />
				</Router>
			</div>
		);
	}
}
