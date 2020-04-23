import { Fragment } from "preact";

function Tel({tel}) {
	const isArrayOfTel = Array.isArray(tel);

	return ( isArrayOfTel
		? tel.map((telNumber, i) => (
			<a href={`tel:${telNumber}`} class="inline-block rounded-lg font-semibold text-gray-700">
				<span>{telNumber}</span>
				{tel.length !== i+1 && <span class="mx-2">-</span>}
			</a>
		))
		: <a href={`tel:${tel}`} class="inline-block rounded-lg font-semibold text-gray-700">
			{tel}
		</a>
	);
}

export const D_Contacts = ({tel, mail, site, fb}) => {
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
            {fb && (
					<p class="mb-2">
						<span
							class="inline-block mr-2 w-6 h-6 bg-blue-500 text-sm font-bold text-trueWhite text-center leading-6 rounded-lg cursor-pointer"
							role="img"
							aria-label="see the site"
						>
						f
						</span>
						<a href={fb} class="inline-block rounded-lg font-semibold text-gray-700">
							<span>Facebook</span>
						</a>
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
						<a href={site} class="inline-block rounded-lg font-semibold text-gray-700">
							<span>Sito web</span>
						</a>
					</p>
				)}
				{mail && (
					<p class="mb-2">
						<span
							class="inline-block mr-2 w-6 h-6 bg-blue-300 text-center text-xs leading-6 rounded-lg cursor-pointer"
							role="img"
							aria-label="send mail"
						>
						✉️
						</span>
						<a href={`mailto:${mail}?subject=Contatto da imoladomicilio.it`} class="inline-block rounded-lg font-semibold text-gray-700">
							<span>E-mail</span>
						</a>
					</p>
				)}
			</div>
		</Fragment>
	);
}