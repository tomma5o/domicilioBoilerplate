import { Component, Fragment } from "preact";

import { ListCategory } from "../components/listCategory";

export default class Home extends Component {
   state = {
      filter: "",
      categoryFilter: null,
   };

   calculateStoresNumber() {
      const { results: stores } = this.props;
      const keys = Object.keys(stores);
      let storesNumber = 0;
      for (const key of keys) {
         storesNumber += stores[key].data.length;
      }
      return storesNumber;
   }

   getFinalSentence(categoriesToList) {
      const { results: stores } = this.props;
      const keys = Object.keys(stores);
      const relevantKeys = keys.slice(0, categoriesToList);
      if (relevantKeys.length === 0) return "";
      const joinedRelevantKeys = relevantKeys.join(", ");
      return `tra ${joinedRelevantKeys} ed altri`;
   }

   handleSubmit = (e) => {
      e.target.querySelector("#textSearch").blur();
      e.preventDefault();
   };

   handleChangeFilter = (e) => {
      const text = e.target.value;
      this.setState({ filter: text });
   };

   handleCategoryFilter = (key) => (_) => {
      // eslint-disable-line no-unused-vars
      if (key === this.state.categoryFilter) {
         return this.setState({ categoryFilter: null });
      }
      this.setState({ categoryFilter: key });
   };

   filteredCategories(filter, categoryFilter) {
      const { results } = this.props;
      const regexStore = new RegExp(`${filter}`, "i");
      const regexCategory = new RegExp(`[${filter}]{${filter.length},}`, "i");

      return Object.keys(results)
         .filter((key) => (categoryFilter ? categoryFilter === key : true))
         .reduce((acc, key) => {
            return {
               ...acc,
               [key]: {
                  icon: results[key].icon,
                  data: regexCategory.test(key)
                     ? results[key].data
                     : results[key].data.filter((e) =>
                          filter.length ? regexStore.test(e.name) : true
                       ),
               },
            };
         }, {});
   }

   isEmptySearch(filteredStores) {
      let storesFound = 0;
      for (const key in filteredStores) {
         storesFound += filteredStores[key].data.length;
      }
      return storesFound === 0;
   }

   render(props, { filter, categoryFilter }) {
      const { results: stores } = props;
      const filteredStores = this.filteredCategories(filter, categoryFilter);
      const storesNumber = this.calculateStoresNumber();
      const finalSentence = this.getFinalSentence(6);
      const isEmptySearch = this.isEmptySearch(filteredStores);

      return (
         <Fragment>
            <main>
               {storesNumber > 0 && (
                  <p class="text-center my-5">
                     {storesNumber} attività {finalSentence} che consegnano a
                     domicilio a{" "}
                     <span class="capitalize">
                        {process.env.PREACT_APP_CITY}
                     </span>
                     .
                  </p>
               )}
               <form action="#" onSubmit={this.handleSubmit}>
                  <label class="my-5">
                     <p class="mb-2 text-sm">Cerca per nome</p>
                     <input
                        id="textSearch"
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="search"
                        placeholder="Nome attività"
                        onInput={this.handleChangeFilter}
                     />
                  </label>
                  <button class="hidden">Search</button>
               </form>
               <div class="mt-5 mb-2 flex justify-between items-center">
                  <p class="text-sm">Filtra per categoria</p>
                  <div class="float-right text-xs">Altre &rarr;</div>
               </div>
               <div class="flex overflow-x-scroll text-center mt-2 mb-5">
                  {Object.keys(stores).map((key) => (
                     <button
                        onClick={this.handleCategoryFilter(key)}
                        class={`m-1 flex-grow-0 flex-shrink-0 items-center border border-blue-500 py-2 px-4 rounded-full ${
                           key === categoryFilter
                              ? "bg-blue-500 text-white outline-none text-white"
                              : "bg-white"
                        }`}
                     >
                        <span>{`${stores[key].icon} ${key}`}</span>
                     </button>
                  ))}
               </div>
               <p class="text-center my-5">
                  Paga dal tuo smartphone senza scambio di denaro o carte.{" "}
                  <a
                     rel="noopener noreferrer"
                     target="_blank"
                     class="text-red-500"
                     href="https://www.satispay.com/promo/ANDREAVERL"
                  >
                     Entra in Satispay ed ottieni un bonus di 5€
                  </a>
                  .
               </p>
               <div class="relative mb-10 font-sans text-md text-gray-800">
                  {Object.keys(filteredStores)
                     .filter((key) => filteredStores[key].data.length)
                     .map((key) => (
                        <ListCategory
                           name={key}
                           category={filteredStores[key]}
                           filter={filter}
                        />
                     ))}
               </div>
               {isEmptySearch && (
                  <p class="font-bold mt-5 mb-10 text-center">
                     Oops! 😅 Non ci sono attività corrispondenti alla tua
                     ricerca.
                  </p>
               )}
            </main>
            <footer class="text-center w-full">
               <p class="mb-5">
                  Developed with ❤️ by{" "}
                  <a
                     class="underline text-orange-500"
                     href={process.env.PREACT_APP_DEV_LINK}
                  >
                     {process.env.PREACT_APP_DEV_NAME}
                  </a>
               </p>
               <a
                  href="https://github.com/tomma5o/domicilioBoilerplate"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mb-5 text-xs block text-gray-500 hover:underline"
               >
                  Se vuoi crearlo per la tua città visita la pagina GitHub del
                  progetto
               </a>
            </footer>
         </Fragment>
      );
   }
}
