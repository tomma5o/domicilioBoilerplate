import { Fragment } from "preact";

// Utils
import getBrandColor from '../utils/getBrandColor';

export const D_Services = ({services, name}) => {
	
	return (
		<Fragment>
			<h3 class="text-lg font-bold mb-2">Puoi trovarci anche su:</h3>
			<div>
				{services.map((service) => {
					const colors = getBrandColor(service);
					const encodedShopName = encodeURIComponent(name);
					const encodedCity = encodeURIComponent(
						process.env.PREACT_APP_CITY
					);

					return (
						<a
							href={`https://www.google.com/search?q=${encodedShopName}%20${encodedCity}%20${service}`}
							class="inline-block py-1 px-3 mb-2 mr-2 text-sm rounded-full font-semibold"
							target="_blank"
							rel="noopener noreferrer"
							style={colors}
						>
							{service}
						</a>
					);
				})}
			</div>
		</Fragment>
	);
};
