import { Quest } from '../../world-generator-4.js';
import { executeWithProbability, getRandomEl } from '../../utils/math-functions.js';

function Bounty() {
	const quest = new Quest();
	return Object.assign({}, quest, {
		owner: {},
		type: 'Bounty',
		verbs: [
			'stabbing them with a sharp stick',
			'poisoning them',
			'pushing them off the edge of a cliff'
		],
		targetNpc: {}
	});
}

export function createBounties(worldObj, dict) {
	worldObj.npcs.forEach((npc) => {
		if (executeWithProbability(1 / 3)) {
			const newQuest = new Bounty();
			newQuest.id = `bounty${worldObj.countOf.quests}`;
			newQuest.owner = npc;
			npc.quests.push(newQuest);

			const listNpcsExceptSelf = worldObj.npcs.filter((n) => n.id != npc.id);
			newQuest.targetNpc = getRandomEl(listNpcsExceptSelf);
			newQuest.addToWorld(worldObj);
			worldObj.countOf.quests++;
			dict.set(newQuest.id, newQuest);
		}
	});
}
