/**
 * @name getBrandColor
 * @param {String} brandName 
 * @returns {{bg: string, color: string}}
 */
export default function getBrandColor(brandName) {
	switch (brandName) {
		case "Glovo":
			return {
				backgroundColor: "#fdb636",
				color: "#00a082"
			};

		case "Deliveroo":
			return {
				backgroundColor: "#19c4ae",
				color: "#fff"
			};

		case "JustEat":
			return {
				backgroundColor: "#f50020",
				color: "#fff"
			};
	
		default:
			return {
				backgroundColor: "gray",
				color: "#fff"
			};
	}
}