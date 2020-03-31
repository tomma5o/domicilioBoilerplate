import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import 'tailwindcss/dist/tailwind.min.css';
import './style.css';

// Code-splitting is automated for routes
import Home from './routes/home.js';
import Form from './routes/form.js';

// Constants
const SEARCH = process.env.PREACT_APP_DATA_SOURCE;

export default class App extends Component {

	state = {
		results: [],
		isHomepage: true,
	}
	
	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({isHomepage: e.url === "/"});
	};

	componentDidMount() {
		fetch(
			`${SEARCH}`
		)
			.then(r => r.json())
			.then(json => {
			   let entries = json.feed.entry;
            let items = entries.reduce(function(results, item) {
               (results[item.gs$cell.row] = results[item.gs$cell.row] || []).push(item);
               return results;
            }, {});
            delete items[1];

            let parsed_items = Object.keys(items).map(key => {
               return {
                  'cat': items[key][0].content.$t,
                  'name': items[key][1].content.$t,
                  'address': items[key][2].content.$t,
                  'website': items[key][3].content.$t,
                  'phone': items[key][4].content.$t,
                  'description': items[key][5].content.$t,
                  'email': items[key][6].content.$t,
               }
            });

           let grouped_items = parsed_items.reduce(function(results, item) {
               (results[item.cat] = results[item.cat] || []).push(item);
               return results;
            }, {});




				this.setState({
					results: grouped_items,
					resultBkp: json
				});

			});
	}

	render(props, { isHomepage, results }) {
		return (
			<div id="app" class="px-5 max-w-screen-md mx-auto">
				<h1 class="font-sans text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center capitalize">
					<img alt={"Fiumicino a Domicilio"} className={'logo'} src="assets/logo.svg"/>
				</h1>
				<Router onChange={this.handleRoute}>
					<Home path="/" results={results} />
					<Form path="/form" />
				</Router>
			</div>
		);
	}
}
