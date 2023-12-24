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
	'Cottonwood'
];
const secondFarm = [
	'Haven',
	'Grove',
	'Fields',
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
		type: 'farm',
		jobs: ['spud digger', 'chicken rancher']
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
