import { Component, Fragment } from 'preact';

import { ListCategory } from '../components/listCategory';

const SEARCH =
	'https://gist.githubusercontent.com/tomma5o/1ca63d091b01a2fa6a73a17cc86b8fe6/raw/FerraraDomicilio.json';

export default class Home extends Component {
	state = {
		results: {},
		filter: ''
	};

	handleChangeFilter = e => {
		const text = e.target.value;
		this.setState({ filter: text });
	};

	filteredCategories(filter) {
		const { results } = this.state;
		const regex = new RegExp(`${filter}`, 'i');

		return Object.keys(results).reduce((acc, key) => {
			return (
				{
					...acc,
					[key]: {
						icon: results[key].icon,
						data: results[key].data.filter(e => (filter.length ? regex.test(e.name) : true))
					}
				}
			);
		}, {});
	}

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

	render(props, { filter }) {
		const stores = this.filteredCategories(filter)

		return (
			<Fragment>
				<div class="relative p-5">
					<input
						class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
						type="text"
						placeholder="Cerca Attività"
						onInput={this.handleChangeFilter}
					/>
				</div>
				<div class="relative p-5 font-sans text-md text-gray-800">
					{
						Object.keys(stores) && Object.keys(stores)
							.filter(key => stores[key].data.length)
							.map(key => (
								<ListCategory
									name={key}
									category={stores[key]}
									filter={filter}
								/>
							))
					}
				</div>
				<div>
					<p class="mb-5 text-center">Developed with ❤️ by <a class="text-orange-500" href="https://twitter.com/tomma5o">Tomma5o</a></p>
				</div>
			</Fragment>
		);
	}
}
