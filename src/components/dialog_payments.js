import { Fragment } from "preact";

export const D_Payments = ({payments}) => {
	return (
		<Fragment>
			<h3 class="text-lg font-bold mb-2 text-gray-700">Metodi di pagamento:</h3>
			<div class="mb-5">
				{payments.map((payment) => {
					return (
						<span
							class="inline-block py-1 px-3 mb-2 mr-2 text-sm rounded-full bg-gray-500 font-semibold text-gray-700"
							target="_blank"
							rel="noopener noreferrer"
						>
							{payment}
						</span>
					);
				})}
			</div>
		</Fragment>
	);
};
