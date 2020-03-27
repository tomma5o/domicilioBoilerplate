import { useState } from 'preact/hooks';

export const ListItem = ({ name, tel, site, note }) => {
	const [infoVisible, setInfoVisible] = useState(false);

	function handleClick() {
		setInfoVisible(!infoVisible);
	}

	return (
		<div class="rounded-lg border bg-gray-200 p-5 text-lg font-semibold text-gray-700 my-5">
			<div class="flex justify-between">
				<span>
					<a class="hover:underline" href={`https://www.google.com/search?q=${name}%20ferrara`} target="_blank" rel="noopener noreferrer">{name}</a>
				</span>
				<div class="flex">
					{note && (
						<span
							onClick={handleClick}
							class="inline-block mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-yellow-300 rounded-lg"
							role="img"
							aria-label="warning"
						>
							⚠️
						</span>
					)}
					{site && (
						<a href={`//${site}`}>
							<span
								onClick={handleClick}
								class="inline-block mx-2 w-8 h-8 cursor-pointer text-center leading-8  bg-orange-300 rounded-lg"
								role="img"
								aria-label="website"
							>
							🌐
							</span>
						</a>
					)}
					{tel && (
						<a href={`tel:${tel}`}>
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
					<p class="text-yellow-700">{note}</p>
				</div>
			)}
		</div>
	);
};
