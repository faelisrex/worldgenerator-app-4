import { executeWithProbability, getRandomEl } from '../../utils/math-functions';
import { Item, Quest } from '../../world-generator-4';

const lostItemList = [
	'lost sock of eternal wandering',
	'misplaced heirloom of questionable value',
	'existentially confused cat',
	'obviously-not-a-treasure map',
	'talking amulet',
	'key that refuses to be found',
	'diary from a forgetful wizard',
	"puppy that believes it's a cat",
	'ring with commitment issues',
	'potion bottle labeled "drink me... or not"',
	'spellbook of vanishing ink',
	"magic talisman that's not doing its job",
	'ordinary not-a-grimoire book',
	"bag of gems that's really just pebbles",
	'magic scroll with an illegible spell',
	'dagger that identifies as a butter knife'
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
