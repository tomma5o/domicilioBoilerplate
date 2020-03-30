import { useState, useContext } from 'preact/hooks';

// Actions
import { Action } from '../index'

export const ListItem = ({ name, tel, site, mail, note }) => {
	const [infoVisible, setInfoVisible] = useState(false);
	const action = useContext(Action);
	const encodedName = encodeURIComponent(name);
	const encodedCity = encodeURIComponent(process.env.PREACT_APP_CITY);
	const searchUrl = `https://www.google.com/search?q=${encodedName}%20${encodedCity}`;

	function handleClick() {
		setInfoVisible(!infoVisible);
	}

	return (
		<div class="rounded-lg border bg-gray-200 p-4 md:p-5 my-5 text-md lg:text-xl font-semibold text-gray-700">
			<div class="flex justify-between items-center">
				<span>
					<a class="hover:underline" href={searchUrl} target="_blank" rel="noopener noreferrer">{name}</a>
				</span>
				<div class="flex">
					{note && (
						<span
							onClick={handleClick}
							class="inline-block mx-1 md:mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-yellow-300 rounded-lg"
							role="img"
							aria-label="warning"
						>
							⚠️
						</span>
					)}
					{site && (
						<a href={`${site}`}>
							<span
								onClick={handleClick}
								class="inline-block mx-1 md:mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-orange-300 rounded-lg"
								role="img"
								aria-label="website"
							>
							🌐
							</span>
						</a>
					)}
					{mail && (
						<a href={`mailto:${mail}`}>
							<span
								onClick={handleClick}
								class="inline-block mx-1 md:mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-blue-300 rounded-lg"
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
								class="inline-block mx-2 w-8 h-8 bg-green-300 text-center leading-8 rounded-lg cursor-pointer"
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
				<div class="block mt-10">
					<p class="text-yellow-700 text-sm md:text-md lg:text-lg">{note}</p>
				</div>
			)}
		</div>
	);
};
