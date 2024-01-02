export function getRandomEl(array) {
	const randIndex = Math.floor(Math.random() * array.length);
	return array[randIndex];
}
// Function returns a random integer within range Inclusive
export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function that return true P% of the time
export function executeWithProbability(p) {
	const randValue = Math.random();
	return randValue < p;
}

export function getThreeRandTable(first, second, third) {
	return `${getRandomEl(first)} ${getRandomEl(second)} ${getRandomEl(third)}`;
}

export function shuffleArray(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex > 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}

export function randn_bm(min, max, skew) {
	let u = 0,
		v = 0;
	while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
	while (v === 0) v = Math.random();
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	num = num / 10.0 + 0.5; // Translate to 0 -> 1
	if (num > 1 || num < 0)
		num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
	else {
		num = Math.pow(num, skew); // Skew
		num *= max - min; // Stretch to fill range
		num += min; // offset to min
	}
	return num;
}
