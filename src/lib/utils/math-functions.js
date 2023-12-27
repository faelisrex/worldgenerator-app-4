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

export const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
