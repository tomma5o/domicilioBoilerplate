import { useState } from 'preact/hooks';

export const ListItem = ({ name, tel, site, note }) => {
	const [infoVisible, setInfoVisible] = useState(false);

	function handleClick() {
		setInfoVisible(!infoVisible);
	}

	return (
		<div className="rounded-lg border bg-gray-200 p-5 text-lg font-semibold text-gray-700 my-5">
			<div className="flex justify-between">
				<span>{name}</span>
				<div className="">
					{note && (
						<span
							onClick={handleClick}
							className="inline-block mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-yellow-300 rounded-lg"
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
								className="inline-block mx-2 w-8 h-8 cursor-pointer text-center leading-8  bg-orange-300 rounded-lg"
								role="img"
								aria-label="website"
							>
							🌐
							</span>
						</a>
					)}
					<a href={`tel:${tel}`}>
						<span
							className="inline-block mx-2 w-8 h-8 bg-green-300 text-center leading-8 rounded-lg cursor-pointer"
							role="img"
							aria-label="telephone"
						>
						📞
						</span>
					</a>
				</div>
			</div>
			{infoVisible && (
				<div className="block mt-10">
					<p className="text-yellow-700">{note}</p>
				</div>
			)}
		</div>
	);
};
