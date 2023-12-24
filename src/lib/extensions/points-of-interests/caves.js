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
		jobs: ['caveman']
	});
}

export function createCaves(min, max, worldObj, dict) {
	let minimum = min > 0 ? min : 1;

	for (let ii = 0; ii < getRandomInt(minimum, max); ii++) {
		const location = getRandomEl(worldObj.settlements);

		const newCave = new Cave();
		newCave.id = `cave${worldObj.countOf.buildings}`;
		newCave.type = 'Cave';
		newCave.name = `${getRandomEl(firstWordsCave)} ${getRandomEl(secondWordsCave)} ${getRandomEl(
			thirdWordsCave
		)}`;
		newCave.location = location;

		if (executeWithProbability(0.5)) {
			const caveman = new Caveman();
			caveman.id = `npc${worldObj.countOf.npcs}`;
			caveman.type = 'Caveman';
			caveman.firstName = getRandomEl(sinisterFirstNames);
			caveman.lastName = getRandomEl(sinisterLastNames);

			caveman.building = newCave;
			caveman.job = 'cave man';
			caveman.location = location;

			newCave.npc = caveman;
			newCave.isOccupied = true;
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
