import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import 'tailwindcss/dist/tailwind.min.css';

// Code-splitting is automated for routes
import Home from './routes/home.js';
import Form from './routes/form.js';

// Constants
const SEARCH =
	'https://gist.githubusercontent.com/Th3Wall/a1737863a43420319c0fea4515245430/raw/6ed60a2f686799cf68af51446b192a5f82b3bb0d/CernuscoDomicilio.json';

export default class App extends Component {

	state = {
		results: {},
		isHomepage: true,
	}
	
	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({isHomepage: e.url === "/"});
	};

	componentDidMount() {
		fetch(
			`${SEARCH}?q=${Math.random()
				.toString(36)
				.split('.')}`
		)
			.then(r => r.json())
			.then(json => {
				this.setState({
					results: json,
					resultBkp: json
				});
			});
	}

	render(props, { isHomepage, results }) {
		// console.log(isHomepage)
		return (
			<div id="app" class="px-5">
				<nav class="flex justify-center md:justify-end items-center">
					{
						isHomepage
							? null
							: <Link class="m-5 text-blue-500 hover:text-blue-800" href="/">Ritorna alla ricerca</Link>
					}
					<Link class="m-5 bg-blue-500 inline-block hover:bg-blue-700 text-white font-bold px-2 py-1 rounded" href="/form">Aggiungi la tua attività</Link>
				</nav>
				<h1 class="font-sans text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center">
					<span class="block sm:inline-block" role="img" aria-label="biker">
						🚴&nbsp;
					</span>
					Cernusco a Domicilio
				</h1>
				<Router onChange={this.handleRoute}>
					<Home path="/" results={results} />
					<Form path="/form" />
				</Router>
			</div>
		);
	}
}
