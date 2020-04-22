import { Fragment } from "preact";

// Utils
import getBrandColor from '../utils/getBrandColor';

export const D_Services = ({services}) => {
	
	return (
		<Fragment>
			<h3 class="text-lg font-bold mb-2 text-gray-700">Puoi trovarci anche su:</h3>
			<div>
				{services.map((service) => {
					const colors = getBrandColor(service);

					return (
						<span
							class="inline-block py-1 px-3 mb-2 mr-2 text-sm rounded-full font-semibold text-gray-700"
							target="_blank"
							rel="noopener noreferrer"
							style={colors}
						>
							{service}
						</span>
					);
				})}
			</div>
		</Fragment>
	);
};
