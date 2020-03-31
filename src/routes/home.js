import { Component, Fragment } from 'preact';

import { ListCategory } from '../components/listCategory';
import {Link} from "preact-router/match";

export default class Home extends Component {
	state = {
		filter: '',
      isHomepage: true
	};

	handleChangeFilter = e => {
		const text = e.target.value;
		this.setState({ filter: text });
	};

	filteredCategories(filter) {
      const { results } = this.props;

      let items = results;

     let filtered_keys = Object.keys(items).filter(key => {
        let cat = key.toUpperCase();
        if(filter) {
           filter = filter.toUpperCase();
        }
        return cat.includes(filter);

     });


  /*    const filtered = Object.keys(items)
         .filter(key => filtered_keys.includes(key))
         .reduce((obj, key) => {
            obj[key] = items[key];
            return obj;
         }, {});
*/



/*  const filtered =  Object.keys(items).map(key => {
     return {
        [key]:{
           data: items[key]
        }
     }
  })*/

      let toret = {};

      Object.keys(items).forEach(key => {
         toret[key] = {data: items[key].filter(item => {
               return item.name.toUpperCase().includes(filter.toUpperCase()) && item.status === 'ok';
            })}
      });


      return toret;
	}

	render(props, { filter, isHomepage }) {
		const stores = this.filteredCategories(filter);

		return (
			<Fragment>
            <div class="mobile-buttons">
               <Link href='/iniziativa'><img src="assets/icons/info.svg" class="info"/></Link>
               <a className="btn btn-blue" target="_blank" rel='noopener'
                  href="https://bit.ly/fiumicinoadomicilio">Aggiungi un'attività</a>
            </div>
            <img alt={"Fiumicino a Domicilio"} className={'logo'} src="assets/logo.svg"/>
					<input
						class="search"
						type="text"
						placeholder="Cosa stai cercando?"
						onInput={this.handleChangeFilter}
					/>
            <nav className="buttons">
               <Link class="btn btn-gray"
                     href="/iniziativa">A proposito dell'iniziativa</Link>
               <a class="btn btn-blue" target="_blank" rel='noopener'
                     href="https://bit.ly/fiumicinoadomicilio">Aggiungi un'attività</a>
            </nav>
				<div class="relative mb-10 font-sans text-md text-gray-800">
               <div class="categories">
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
				</div>

            <div className="footer">
               <img className="logo" src="assets/footer-logo.svg"/>
               <p className="mb-5 text-center">Realizzato da cittadini di Fiumicino per i cittadini di Fiumicino | da un'
                  idea di <a href='http://tomma5o.com/' target='_blank'>Tomma5o</a></p>
               <p><a href="https://www.iubenda.com/privacy-policy/83882923" className="iubenda-white iubenda-embed"
                     title="Privacy Policy ">Privacy Policy</a>
               </p>
            </div>

			</Fragment>
		);
	}
}
