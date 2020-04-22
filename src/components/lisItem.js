import { useState, useContext } from 'preact/hooks';

// Actions
import { Action } from '../index'

const countIcons = (site, fb, mail, note, tel) => {
   let count = 0;
   site && (count += 1);
   fb && (count += 1);
   mail && (count += 1);
   note && (count += 1);
   tel && (count += 1);
   return count;
}

export const ListItem = ({ name, tel, site, fb, mail, note, newEntry, satispay }) => {
	const [infoVisible, setInfoVisible] = useState(false);
	const action = useContext(Action);
	const encodedName = encodeURIComponent(name);
   const encodedCity = encodeURIComponent(process.env.PREACT_APP_CITY);
	const searchUrl = `https://www.google.com/search?q=${encodedName}%20${encodedCity}`;
   const link = site || fb || searchUrl;
   const iconsCount = countIcons(site, fb, mail, note, tel);
   let iconsDivClass = "flex self-start";
   if (iconsCount > 4) iconsDivClass += " flex-wrap justify-end";

	function handleClick() {
		setInfoVisible(!infoVisible);
	}

	return (
		<article class={`relative rounded-lg border border-gray-500 bg-gray-200 p-4 md:p-5 my-5 text-md lg:text-xl font-semibold text-gray-700 ${newEntry ? "new-entry" : ""}`}>
			<div class="flex justify-between items-center">
				<p class="flex flex-col self-start mr-2">
					<a class="hover:underline" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
					{satispay && (<div class="text-red-500 text-xs md:text-sm">Accetta Satispay</div>)}
				</p>
				<div class={iconsDivClass}>
					{note && (
						<span
							onClick={handleClick}
							class="inline-block m-1 md:m-2 w-8 h-8 cursor-pointer text-center leading-8 bg-yellow-300 rounded-lg"
							role="img"
							aria-label="warning"
						>
							ℹ
						</span>
					)}
					{site && (
						<a href={`${site}`}>
							<span
								class="inline-block m-1 md:m-2 w-8 h-8 cursor-pointer text-center leading-8 bg-orange-300 rounded-lg"
								role="img"
								aria-label="website"
							>
							🌐
							</span>
						</a>
					)}
               {fb && (
						<a href={`${fb}`}>
							<span
								class="inline-block m-1 md:m-2 w-8 h-8 cursor-pointer font-bold text-trueWhite text-center text-lg leading-8 bg-blue-700 rounded-lg"
								role="img"
								aria-label="facebook"
							>
							f
							</span>
						</a>
					)}
					{mail && (
						<a href={`mailto:${mail}`}>
							<span
								class="inline-block m-1 md:m-2 w-8 h-8 cursor-pointer text-center leading-8 bg-blue-500 rounded-lg"
								role="img"
								aria-label="e-mail"
							>
							✉️
							</span>
						</a>
					)}
					{tel && (
						<a href={`tel:${tel}`} onClick={(e) => Array.isArray(tel) && action.setPopupNumbers(e, tel)}>
							<span
								class="inline-block m-1 md:m-2 w-8 h-8 bg-green-300 text-center leading-8 rounded-lg cursor-pointer"
								role="img"
								aria-label="telephone"
							>
							📞
							</span>
						</a>
					)}
				</div>
			</div>
			{infoVisible && (
				<p class="block mt-5 text-blue-500 text-sm md:text-md lg:text-lg">{note}</p>
			)}
		</article>
	);
};
