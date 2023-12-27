import { getRandomEl } from '../../utils/math-functions';

export function selectResources(worldObj) {
	worldObj.settlements.forEach((settlement) => {
		for (let ii = 0; ii < settlement.nResources; ii++) {
			settlement.resources.push(getRandomEl(worldObj.resources));
		}
	});
}
