export const ListOpeningtime = ({ days = '', times = ''}) => {
	return (
        <p class="text-yellow-700 text-sm md:text-md lg:text-lg">{days}: {times}</p>
	);
};