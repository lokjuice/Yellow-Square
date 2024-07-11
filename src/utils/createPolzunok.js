export const createPolzunok = (id) => {
	let polzunok = '';
	for(let a = 0; a < 29; a++) {
		if (a / 2 === id - 1) {
			polzunok += '|';
		} else {
			polzunok += '_';
		}
	}

	return polzunok;
}