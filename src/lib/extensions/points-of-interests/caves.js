import { executeWithProbability, getRandomEl, getRandomInt } from '../../utils/math-functions.js';
import { PointOfInterest } from './point-of-interest.js';
import { Npc } from '../../world-generator-4.js';
import sinisterFirstNames from '../../lists/names/sinister-firstNames.js';
import sinisterLastNames from '../../lists/names/sinister-lastNames.js';

const firstWordsCave = [
	'Shadow',
	'Echoing',
	'Crystal',
	'Mystic',
	'Dark',
	'Enchanted',
	'Hidden',
	'Whispering',
	'Eternal',
	'Frozen',
	'Ancient',
	'Silent',
	'Glowing',
	'Twilight',
	'Labyrinthine'
];

const secondWordsCave = [
	'Cavern',
	'Grotto',
	'Abyss',
	'Chasm',
	'Rift',
	'Hollow',
	'Den',
	'Passage',
	'Ravine',
	'Sanctuary',
	'Maze',
	'Crypt',
	'Aerie',
	'Depths'
];

const thirdWordsCave = [
	'Domain',
	'Expanse',
	'Lair',
	'Chamber',
	'Retreat',
	'Haven',
	'Cove',
	'Sanctum',
	'Catacombs',
	'Abode',
	'Vault'
];

function Caveman() {
	const caveman = new Npc();
	return Object.assign({}, caveman, {});
}

function Cave() {
	const building = new PointOfInterest();
	return Object.assign({}, building, {
		jobs: ['outlaw']
	});
}

export function createCaves(min, max, worldObj, dict) {
	let minimum = min > 0 ? min : 1;

	for (let ii = 0; ii < getRandomInt(minimum, max); ii++) {
		const location = getRandomEl(worldObj.settlements);

		const newCave = new Cave();
		newCave.id = `cave${worldObj.countOf.pois}`;
		newCave.type = 'Cave';
		newCave.name = `${getRandomEl(firstWordsCave)} ${getRandomEl(secondWordsCave)} ${getRandomEl(
			thirdWordsCave
		)}`;
		newCave.location = location;

		if (executeWithProbability(0.5)) {
			let caveman = new Caveman();
			caveman.id = `npc${worldObj.countOf.npcs}`;
			caveman.type = 'Outsider';
			caveman.firstName = getRandomEl(sinisterFirstNames);
			caveman.lastName = getRandomEl(sinisterLastNames);

			caveman.building = newCave;
			caveman.job = getRandomEl(newCave.jobs);
			caveman.location = location;

			caveman.alignment = 'CN';

			newCave.npc = caveman;
			newCave.isOccupied = true;

			location.npcs.push(caveman);
			caveman.addToWorld(worldObj);
			worldObj.countOf.npcs++;
			dict.set(caveman.id, caveman);
		}

		location.pois.push(newCave);
		worldObj.pois.push(newCave);
		worldObj.countOf.pois++;
		dict.set(newCave.id, newCave);
	}
}
