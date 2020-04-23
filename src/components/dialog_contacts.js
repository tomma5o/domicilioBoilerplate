import { Fragment } from "preact";

// Utils
import cleanUrls from '../utils/cleanUrls'

function Tel({tel}) {
	const isArrayOfTel = Array.isArray(tel);

	return ( isArrayOfTel
		? tel.map((telNumber, i) => (
			<a href={`tel:${telNumber}`} class="inline-block rounded-lg text-sm font-semibold text-gray-700">
				<span>{telNumber}</span>
				{tel.length !== i+1 && <span class="mx-2">-</span>}
			</a>
		))
		: <a href={`tel:${tel}`} class="inline-block rounded-lg text-sm font-semibold text-gray-700">
			{tel}
		</a>
	);
}

export const D_Contacts = ({tel, mail, site}) => {
	return (
		<Fragment>
			<h3 class="text-lg font-bold mb-2 text-gray-700">Contatti</h3>
			<div class="mb-5">
				{tel && (
					<p class="mb-2">
						<span
							class="inline-block mr-2 w-6 h-6 bg-green-300 text-xs text-center leading-6 rounded-lg cursor-pointer"
							role="img"
							aria-label="telephone"
						>
						📞
						</span>
						<Tel {...{tel}} />
					</p>
				)}
				{site && (
					<p class="mb-2">
						<span
							class="inline-block mr-2 w-6 h-6 bg-orange-300 text-xs text-center leading-6 rounded-lg cursor-pointer"
							role="img"
							aria-label="see the site"
						>
						🌐
						</span>
						<a href={site} class="inline-block rounded-lg text-sm font-semibold text-gray-700">
							<span>{cleanUrls(site)}</span>
						</a>
					</p>
				)}
				{mail && (
					<p class="mb-2">
						<span
							class="inline-block mr-2 w-6 h-6 bg-blue-300 text-xs text-center leading-6 rounded-lg cursor-pointer"
							role="img"
							aria-label="send mail"
						>
						✉️
						</span>
						<a href={`mailto:${mail}`} class="inline-block rounded-lg text-sm font-semibold text-gray-700">
							<span>{mail}</span>
						</a>
					</p>
				)}
			</div>
		</Fragment>
	);
}