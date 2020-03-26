import { ListItem } from './lisItem';

export const ListCategory = ({ name = '', category = {}}) => {
	return (
		<div id={name.replace(' ', '_')} className="relative ">
			<p className="text-5xl capitalize">
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
