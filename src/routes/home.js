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
      const relevantKeys = keys.slice(0, categoriesToList)
      if (relevantKeys.length === 0) return ""; 
      const joinedRelevantKeys = relevantKeys.join(", ");
      return `tra ${joinedRelevantKeys}, ...`;
   }

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
      const regex = new RegExp(`${filter}`, "i");

      return Object.keys(results)
         .filter((key) => (categoryFilter ? categoryFilter === key : true))
         .reduce((acc, key) => {
            return {
               ...acc,
               [key]: {
                  icon: results[key].icon,
                  data: results[key].data.filter((e) =>
                     filter.length ? regex.test(e.name) : true
                  ),
               },
            };
         }, {});
   }

   render(props, { filter, categoryFilter }) {
      const { results: stores } = props;
      const filteredStores = this.filteredCategories(filter, categoryFilter);
      const storesNumber = this.calculateStoresNumber();
      const finalSentence = this.getFinalSentence(9);
      const emptySearch = Object.keys(filteredStores).length === 0;

      return (
         <Fragment>
            {storesNumber > 0 && (
               <div class="text-center mt-2 mb-5">
                  A{" "}
                  <span class="capitalize">{process.env.PREACT_APP_CITY}</span>{" "}
                  sono presenti{" "}
                  <span class="font-semibold">{storesNumber}</span>{" "}
                  attività {finalSentence} che consegnano a domicilio
               </div>
            )}
            <div class="my-10">
               <input
                  class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  type="text"
                  placeholder="Cerca Attività"
                  onInput={this.handleChangeFilter}
               />
            </div>
            <div class="relative flex overflow-x-scroll text-center mt-2 pb-5">
               {Object.keys(stores).map((key) => (
                  <button
                     onClick={this.handleCategoryFilter(key)}
                     class={`m-1 flex-grow-0 flex-shrink-0 items-center border border-blue-500 py-2 px-4 rounded-full ${
                        key === categoryFilter
                           ? "bg-blue-500 hover:bg-blue-500 text-white outline-none text-white"
                           : "bg-white hover:bg-blue-500 hover:text-white"
                     }`}
                  >
                     <span>{`${stores[key].icon} ${key}`}</span>
                  </button>
               ))}
            </div>
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
            <div class="text-center w-full">
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
            </div>
         </Fragment>
      );
   }
}
