import tavernNames from '../../lists/names/tavernNames';
import { getRandomEl, getRandomInt } from '../../utils/math-functions';
import { Building } from '../../world-generator-4';

function Tavern() {
	const building = new Building();
	return Object.assign({}, building, {
		type: 'tavern',
		jobs: ['Inn Keeper']
	});
}

export function createTaverns(worldObj, myDict) {
	worldObj.settlements.forEach((settlement) => {
		const newTavern = new Tavern();
		newTavern.type = 'Tavern';
		newTavern.name = getRandomEl(tavernNames);
		newTavern.id = `tavern${worldObj.countOf.buildings}`;
		newTavern.location = settlement;
		newTavern.img = `tavern${getRandomInt(1, 2)}`;
		settlement.buildings.push(newTavern);
		worldObj.buildings.push(newTavern);
		worldObj.countOf.buildings++;
		myDict.set(newTavern.id, newTavern);
	});
}
