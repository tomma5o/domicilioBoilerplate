import { Component, createContext } from "preact";
import { Router } from "preact-router";
import { Link } from "preact-router/match";

import "./assets/styles/global.css";

// Routes
import Home from "./routes/home.js";
import Form from "./routes/form.js";
import FormSuccess from "./routes/formSuccess";

// Components
import { Dialog } from "./components/dialog.js";
import { PWAPrompt } from "./components/pwaPrompt";

// Web vitals
import {getCLS, getFID, getLCP} from 'web-vitals';

export const Action = createContext({});

export default class App extends Component {
	state = {
		results: {},
		isHomepage: true,
		isPopupOpen: false,
		popupData: {},
	};

	handleRoute = (e) => {
		this.currentUrl = e.url;
		this.setState({ isHomepage: e.url.replace(/\?.*/g, "") === "/" });
	};

	setPopupNumbers = (e, popupData) => {
		e.preventDefault();

		this.setState({
			popupData,
			isPopupOpen: true,
		});
	};

	closePopup = (e) => {
		if (e.currentTarget === e.target) {
			this.setState({ isPopupOpen: false });
		}
	};

	componentDidMount() {
		fetch(`${process.env.PREACT_APP_DATA_SOURCE}`)
			.then((r) => r.json())
			.then((json) => {
				this.setState({
					results: json,
					resultBkp: json,
				});
			});
	}

	componentDidUpdate() {
		const { isPopupOpen } = this.state;

		const root = document.documentElement;
		root.style.setProperty(
			"--popup-visible",
			isPopupOpen ? "hidden" : "initial"
		);
	}

	render(props, { isHomepage, results, popupData, isPopupOpen }) {
		return (
			<Action.Provider value={{ setPopupNumbers: this.setPopupNumbers }}>
				<div id="app" class="px-5 max-w-screen-md mx-auto">
					<header>
						{/* <div class="m-5 text-center">
							<p class="bg-gray-200 text-sm text-gray-500 px-2 py-1 rounded inline-block">
								Segnalazione attività sospesa fino al __/__
							</p>
						</div> */}
						<nav class="flex justify-center md:justify-end items-center">
							{
								isHomepage
									? <Link class="m-5 bg-blue-500 inline-block text-white font-bold px-2 py-1 rounded" href="/form">➕ Aggiungi un'attività</Link>
									: <Link class="m-5 text-blue-500 inline-block px-2 py-1 rounded" href="/">&larr; Ritorna alla ricerca</Link>
							}
						</nav>
						<h1 class="font-sans text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center">
							{`${process.env.PREACT_APP_CITY} a Domicilio`}
							<span
								class="block sm:inline-block ml-2"
								role="img"
								aria-label="biker"
							>
								🚴
							</span>
						</h1>
					</header>
					<Router onChange={this.handleRoute}>
						<Home path="/" results={results} />
						<Form path="/form" />
						<FormSuccess path="/form/success" />
					</Router>
				</div>
				<Dialog
					isOpen={isPopupOpen}
					closePopup={this.closePopup}
					{...popupData}
				/>
				<PWAPrompt />
			</Action.Provider>
		);
	}
}

// WEB VITALS SEND GO ANALYTICS

if (typeof gtag === "undefined") {
	console.log("⚠ Creating fake gtag function");
	window.gtag = function(){};
}

function sendToGoogleAnalytics({name, delta, id}) {
  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/gtagjs
  gtag('event', name, {
    event_category: 'Web Vitals',
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    event_label: id,
    // Use a non-interaction event to avoid affecting bounce rate.
    non_interaction: true,
  });
}

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);