import { executeWithProbability, getRandomEl } from '../../utils/math-functions';
import { Item, Quest } from '../../world-generator-4';

const lostItemList = [
	'lost axe',
	'lost heirloom',
	'lost cat',
	'forgotten map',
	'vanished amulet',
	'large but misplaced key',
	'journal',
	'disappearing lantern',
	'puppy',
	'ring',
	'potion bottle',
	'spellbook of vanishing',
	'magic talisman',
	'ordinary not-a-grimoire book ',
	'magic cloak',
	'bag of gems',
	'magic scroll',
	'dagger'
];

function LostItem() {
	const lostItem = new Item();
	return Object.assign({}, lostItem, {
		id: '',
		type: 'Retrieval',
		name: lostItemList,
		inThePocketsOf: {},
		originalOwner: {}
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

export function createRetrievalQuest(probability, worldObj, dict) {
	worldObj.npcs.forEach((npc) => {
		if (executeWithProbability(probability)) {
			const newQuest = new RetrievalQuest(worldObj);
			worldObj.countOf.quests++;
			newQuest.id = `retrieval${worldObj.countOf.quests}`;
			newQuest.owner = npc;

			const newItem = new LostItem(worldObj);
			worldObj.countOf.items++;
			newItem.originalOwner = npc;
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
