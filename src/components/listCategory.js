import { ListItem } from './lisItem';

export const ListCategory = ({ name = '', category = {}}) => {
	return (
		<div id={name.replace(' ', '_')} className="relative py-5">
			<p className="text-3xl md:text-4xl capitalize">
				{category.icon} {name}
			</p>
			<div>
				{
					category.data
						.map(props => (
							<ListItem key={props.tel} {...props} />
						))
				}
			</div>
		</div>
	);
};
