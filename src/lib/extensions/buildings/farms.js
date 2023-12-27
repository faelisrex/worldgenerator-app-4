import { Building } from '../../world-generator-4.js';
import { getThreeRandTable, getRandomInt } from '../../utils/math-functions.js';

const firstFarm = [
	'Harvest',
	'Meadow',
	'Sunrise',
	'Golden',
	'Whispering',
	'Maple',
	'Sunny',
	'Green',
	'Rustic',
	'Bountiful',
	'Windmill',
	'Daisy',
	'Peaceful',
	'Tranquil',
	'Cottonwood',
	'River'
];
const secondFarm = [
	'Haven',
	'Grove',
	'Harvest',
	'Winds',
	'Grove',
	'Acres',
	'Orchard',
	'Pastures',
	'Roots',
	'Meadows',
	'Dell',
	'Pines',
	'Thistle',
	'Creek'
];
const thirdFarm = [
	'Farm',
	'Acres',
	'Ranch',
	'Homestead',
	'Farmstead',
	'Estates',
	'Orchard',
	'Ranch',
	'Meadows',
	'Farms',
	'Plantation',
	'Fields'
];

function Farm() {
	const building = new Building();
	return Object.assign({}, building, {
		type: 'Farm',
		jobs: [
			'a spud digger',
			'a chicken rancher',
			'a crop sower',
			'a herb gatherer',
			'an animal husbandman',
			'a milkmaid',
			'a beekeeper',
			'a shepherd',
			'a plowman',
			'an orchard tender',
			'a grain miller',
			'a hay baler',
			'a vegetable harvester',
			'a vintner',
			'an egg collector'
		]
	});
}

export function createFarms(min, max, world, dict) {
	world.settlements.forEach((settlement) => {
		for (let ii = 0; ii < getRandomInt(min, max); ii++) {
			const newFarm = new Farm();
			newFarm.id = `farm${world.countOf.buildings}`;
			newFarm.name = getThreeRandTable(firstFarm, secondFarm, thirdFarm);
			newFarm.location = settlement;
			settlement.buildings.push(newFarm);
			world.buildings.push(newFarm);
			world.countOf.buildings++;
			dict.set(newFarm.id, newFarm);
		}
	});
}
