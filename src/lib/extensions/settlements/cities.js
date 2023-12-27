import { getRandomEl } from '../../utils/math-functions.js';
import { Settlement } from '../../world-generator-4.js';
import humanSettlementNames from '../../lists/names/human-settlementNames.js';

export function createCities(genParams, worldObj, myDict) {
	for (let ii = 0; ii < genParams.nCities; ii++) {
		const newCity = new Settlement();
		newCity.type = 'City';
		newCity.name = getRandomEl(humanSettlementNames);
		newCity.id = `city${worldObj.countOf.settlements}`;
		newCity.nResources = 5;

		newCity.addToWorld(worldObj);
		worldObj.countOf.settlements++;
		myDict.set(newCity.id, newCity);
	}
}
