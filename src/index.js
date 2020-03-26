import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

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
            <nav class="flex justify-end">
					<Link class="m-5 text-blue-500 hover:text-blue-800" activeClassName="text-orange-500" href="/">Home</Link>
					<Link class="m-5 text-blue-500 hover:text-blue-800" activeClassName="text-orange-500" href="/form">Aggiungi la tua attività</Link>
				</nav>
            <h1 class="font-sans text-6xl pb-10 text-gray-800 text-center">
					<span role="img" aria-label="biker">
						🚴
					</span>
					Ferrara a Domicilio
				</h1>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Form path="/form" />
				</Router>
			</div>
		);
	}
}
