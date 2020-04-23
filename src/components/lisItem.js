import { useContext } from "preact/hooks";

// Actions
import { Action } from "../index";

export const ListItem = (props) => {
   const { name, tel, site, fb, services, mail, note, newEntry, satispay } = props;
   const action = useContext(Action);
   const encodedName = encodeURIComponent(name);
   const encodedCity = encodeURIComponent(process.env.PREACT_APP_CITY);
   const searchUrl = `https://www.google.com/search?q=${encodedName}%20${encodedCity}`;
   const link = site || fb || searchUrl;
   const isInfoVisible = Boolean(
      Array.isArray(tel) || site || fb || satispay || services || mail || note
   );

   return (
      <article
         class={`relative rounded-lg border border-gray-500 bg-gray-200 p-4 md:p-5 my-5 text-md lg:text-xl font-semibold text-gray-700 ${
            newEntry ? "new-entry" : ""
         }`}
      >
         <div class="flex justify-between items-center">
            <p class="flex flex-col self-start mr-2">
               <a
                  class="hover:underline"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {name}
               </a>
               {satispay && (
                  <div class="text-red-500 text-xs md:text-sm">
                     Accetta Satispay
                  </div>
               )}
            </p>
            <div class="flex">
               {isInfoVisible && (
                  <span
                     onClick={(e) => action.setPopupNumbers(e, props)}
                     class="inline-block m-1 md:m-2 w-8 h-8 cursor-pointer text-center leading-8 bg-blue-300 rounded-lg"
                     role="button"
                     aria-label="mostra più informazioni"
                  >
                     ℹ️
                  </span>
               )}
               {mail && !site && !tel && (
                  <a
                     href={`mailto:${mail}`}
                     class="inline-block m-1 md:m-2 w-8 h-8 cursor-pointer text-center leading-8 bg-blue-500 rounded-lg"
                     role="img"
                     aria-label="e-mail"
                  >
                     ✉️
                  </a>
               )}
               {site && !tel && (
                  <a
                     href={`${site}`}
                     class="inline-block m-1 md:m-2 w-8 h-8 cursor-pointer text-center leading-8 bg-orange-300 rounded-lg"
                     role="img"
                     aria-label="sito web"
                  >
                     🌐
                  </a>
               )}
               {tel && (
                  <a
                     href={`tel:${tel}`}
                     class="inline-block m-1 md:m-2 w-8 h-8 bg-green-300 text-center leading-8 rounded-lg cursor-pointer"
                     role="img"
                     aria-label="telefono"
                     onClick={(e) =>
                        Array.isArray(tel) && action.setPopupNumbers(e, props)
                     }
                  >
                     📞
                  </a>
               )}
            </div>
         </div>
      </article>
   );
};
