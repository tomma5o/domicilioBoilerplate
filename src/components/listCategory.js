import { ListItem } from './lisItem';

export const ListCategory = ({ name = '', category = [], filter}) => {
  /* console.log("filter:", filter);
   console.log('ccc', category[name]);
   const filtered_cat = category[name].filter(item => {
     let name = item.name.toUpperCase();
      let keyword = filter.toUpperCase();
      console.log(name, keyword);
      return name.includes(keyword);
   });*/


   return (
		<div id={name.replace(' ', '_')} className="relative py-5 category">
			<h1 className="category">
				{name}
			</h1>
			<div>
				{
               category.data.map(props => (
							<ListItem key={props.phone} {...props} />
						))
				}
			</div>
		</div>
	);
};
