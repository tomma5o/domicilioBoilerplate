import { Fragment } from "preact";

export const D_Notes = ({note}) => {
	return (
		<Fragment>
			<h3 class="text-lg font-bold mb-2 text-gray-700">Note:</h3>
			<div class="mb-5 text-gray-700">
            <p>{note}</p>
			</div>
		</Fragment>
	);
};
