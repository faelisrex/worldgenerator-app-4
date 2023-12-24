import { executeWithProbability, getRandomEl } from '../../utils/math-functions';
import { Item, Quest } from '../../world-generator-4';

function LostItem() {
	const lostItem = new Item();
	return Object.assign({}, lostItem, {
		id: '',
		type: 'Retrieval',
		name: ['lost axe', 'lost heirloom', 'lost cat'],
		inThePocketsOf: {}
	});
}

function RetrievalQuest() {
	const quest = new Quest();
	return Object.assign({}, quest, {
		owner: {},
		type: 'Retrieval',
		verbs: [],
		targetItem: {}
	});
}

export function createRetrievalQuest(worldObj, dict) {
	worldObj.npcs.forEach((npc) => {
		if (executeWithProbability(1)) {
			const newQuest = new RetrievalQuest(worldObj);
			worldObj.countOf.quests++;
			newQuest.id = `retrieval${worldObj.countOf.quests}`;
			newQuest.owner = npc;

			const newItem = new LostItem(worldObj);
			worldObj.countOf.items++;
			newItem.id = `item${worldObj.countOf.items}`;
			newItem.name = getRandomEl(newItem.name);
			const listNpcsExceptSelf = worldObj.npcs.filter((n) => n.id != npc.id);
			const targetNpc = getRandomEl(listNpcsExceptSelf);
			targetNpc.items.push(newItem);
			newItem.inThePocketsOf = targetNpc;

			newQuest.targetItem = newItem;

			npc.quests.push(newQuest);
			worldObj.quests.push(newQuest);
			dict.set(newQuest.id, newQuest);
			worldObj.items.push(newItem);
			dict.set(newItem.id, newItem);
		}
	});
}
