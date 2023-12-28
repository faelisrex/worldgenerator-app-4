import { getRandomEl, getRandomInt } from '../../utils/math-functions';
import { Building } from '../../world-generator-4';

const smithyPrefixes = [
	'Iron',
	'Steelhaven',
	'Molten Anvil',
	'Ember',
	'BlazeCraft',
	'Dwarven Hammer',
	'Forged Legacy',
	'Radiant Anvil',
	"Dragon's Breath",
	'Mystic',
	'Storm',
	'Eternal Ember',
	'Phoenix Hammer',
	'Shadow Steel',
	'Thunder'
];

const smithySuffixes = [
	'Blacksmiths',
	'Forge Works',
	'Metalworks',
	'Anvil Creations',
	'Bladecraft',
	'Ironworks',
	'Steelcraft',
	'Hammer & Tongs',
	'Inferno Forge',
	'Magma Ironworks',
	'Sword & Shield',
	'Dwarven Crafters',
	"Dragon's Breath Smithy",
	'Embersmiths',
	'Thunderforge Armory'
];

function Smithy() {
	const building = new Building();
	return Object.assign({}, building, {
		type: 'Smithy',
		jobs: ['blacksmith']
	});
}

export function createSmithies(worldObj, dict) {
	worldObj.settlements.forEach((settlement) => {
		const nMinerals = settlement.resources.filter((el) => el === 'minerals').length;

		for (let ii = 0; ii < nMinerals; ii++) {
			const newSmithy = new Smithy(worldObj, dict);
			newSmithy.id = `smithy${worldObj.countOf.buildings}`;
			newSmithy.name = `${getRandomEl(smithyPrefixes)} ${getRandomEl(smithySuffixes)}`;
			newSmithy.location = settlement;
			newSmithy.img = `smithy${getRandomInt(1, 2)}`;

			settlement.buildings.push(newSmithy);
			worldObj.buildings.push(newSmithy);
			worldObj.countOf.buildings++;
			dict.set(newSmithy.id, newSmithy);
		}
	});
}
