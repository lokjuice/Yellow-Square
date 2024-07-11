export const getBuyInfo = (count) => {
	const info = [
	  ["5000", "1 Логотип"],
	  ["10000", "3 Логотипа"],
	  ["15000", "5 Логотипов"],
	]
	if (count === 1) return info[0];
	if (count === 3) return info[1];
	if (count === 5) return info[2];
}
