import humanSettlementNames from '../../lists/names/human-settlementNames';
import { getRandomEl } from '../../utils/math-functions.js';
import { Settlement } from '../../world-generator-4.js';

export function createTowns(genParams, worldObj, myDict) {
	for (let ii = 0; ii < genParams.nTowns; ii++) {
		const newTown = new Settlement();
		newTown.type = 'Town';
		newTown.name = getRandomEl(humanSettlementNames);
		newTown.id = `town${worldObj.countOf.settlements}`;
		newTown.nResources = 3;

		newTown.addToWorld(worldObj);
		worldObj.countOf.settlements++;
		myDict.set(newTown.id, newTown);
	}
}
