import { Building } from '../../world-generator-4.js';
import { getRandomInt, getThreeRandTable } from '../../utils/math-functions.js';

const firstFarm = [
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
			'spud digger',
			'chicken rancher',
			'crop sower',
			'herb gatherer',
			'livestock breeder',
			'milkmaid',
			'beekeeper',
			'shepherd',
			'plowman',
			'orchard tender',
			'grain miller',
			'hay baler',
			'vegetable harvester',
			'egg collector'
		]
	});
}

export function createFarms(world, dict) {
	world.settlements.forEach((settlement) => {
		const nFarms = settlement.resources.filter((el) => el === 'farmland').length;

		for (let ii = 0; ii < nFarms; ii++) {
			const newFarm = new Farm();
			newFarm.id = `farm${world.countOf.buildings}`;
			newFarm.name = getThreeRandTable(firstFarm, secondFarm, thirdFarm);
			newFarm.location = settlement;
			newFarm.img = `farm${getRandomInt(1, 2)}`;
			settlement.buildings.push(newFarm);
			world.buildings.push(newFarm);
			world.countOf.buildings++;
			dict.set(newFarm.id, newFarm);
		}
	});
}
