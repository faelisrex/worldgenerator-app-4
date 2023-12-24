import { createFarms } from './extensions/buildings/farms.js';
import { createRetrievalQuest } from './extensions/quests/retrievalQuests.js';
import humanFirstNames from './lists/names/human-firstNames.js';
import humanLastNames from './lists/names/human-lastNames.js';
import humanSettlementNames from './lists/names/human-settlementNames.js';
import regionNames from './lists/names/regionNames.js';
import tavernNames from './lists/names/tavernNames.js';
import { executeWithProbability, getRandomEl } from './utils/math-functions.js';

console.log('world-generator-4.js');

function World(name) {
	return {
		name,
		settlements: [],
		buildings: [],
		npcs: [],
		quests: [],
		items: [],
		countOf: {
			settlements: 0,
			npcs: 0,
			buildings: 0,
			quests: 0,
			items: 0
		},
		getSettlementById(id) {
			this.settlements.find((s) => s.id === id);
		},
		getBuildingById(id) {
			this.buildings.find((e) => e.id === id);
		},
		getNpcById(id) {
			this.npcs.find((e) => e.id === id);
		},
		getQuestById(id) {
			this.quests.find((e) => e.id === id);
		},
		getItemById(id) {
			this.items.find((e) => e.id === id);
		}
	};
}
export function Settlement(type, name) {
	return {
		id: '',
		type,
		name,
		buildings: [],
		npcs: [],
		countOf: 0,
		addToWorld(worldObj) {
			worldObj.settlements.push(this);
		},
		getSettlementById(id) {
			this.settlements.find((e) => e.id === id);
		}
	};
}
export function Building() {
	return {
		id: '',
		name: '',
		location: {},
		npcs: []
	};
}
function Tavern() {
	const building = new Building();
	return Object.assign({}, building, {
		type: 'tavern',
		jobs: ['Inn Keeper']
	});
}
export function Npc() {
	return {
		id: '',
		firstName: '',
		lastName: '',
		building: {},
		job: '',
		location: {},
		items: [],
		quests: [],
		addToWorld(worldObj) {
			worldObj.npcs.push(this);
		},
		addToSettlement(settlementObj) {
			settlementObj.npcs.push(this);
		},
		addToBuilding(buildingObj) {
			buildingObj.npcs.push(this);
		},
		getName() {
			return `${this.firstName} ${this.lastName}`;
		}
	};
}
export function Quest() {
	return {
		id: '',
		owner: {},
		type: '',
		addToWorld(worldObj) {
			worldObj.quests.push(this);
		},
		addToSettlement(settlementObj) {
			settlementObj.quests.push(this);
		}
	};
}
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
export function Item() {
	return {
		id: '',
		name: ''
	};
}

const genParams = {
	nCities: 1,
	nTowns: 3,
	nFarms: { min: 1, max: 3 }
};

const world = new World(getRandomEl(regionNames));
const myDict = new Map();

//-----------------------------------------------------------------------Settlements
//--------------------------------------------------------------Cities

for (let ii = 0; ii < genParams.nCities; ii++) {
	const newCity = new Settlement('City', getRandomEl(humanSettlementNames));
	newCity.id = `city${world.countOf.settlements}`;
	newCity.addToWorld(world);
	world.countOf.settlements++;
	myDict.set(newCity.id, newCity);
}

//-----------------------------------------------------------------------Towns
for (let ii = 0; ii < genParams.nTowns; ii++) {
	const newTown = new Settlement('Town', getRandomEl(humanSettlementNames));
	newTown.id = `town${world.countOf.settlements}`;
	newTown.addToWorld(world);
	world.countOf.settlements++;
	myDict.set(newTown.id, newTown);
}

//-----------------------------------------------------------------------Buildings
//--------------------------------------------------------------Taverns
world.settlements.forEach((settlement) => {
	const newTavern = new Tavern();
	newTavern.type = 'Tavern';
	newTavern.name = getRandomEl(tavernNames);
	newTavern.id = `tavern${world.countOf.buildings}`;
	newTavern.location = settlement;
	settlement.buildings.push(newTavern);
	world.buildings.push(newTavern);
	world.countOf.buildings++;
	myDict.set(newTavern.id, newTavern);
});

//--------------------------------------------------------------Farms

createFarms(genParams.nFarms.min, genParams.nFarms.max, world, myDict);

//-----------------------------------------------------------------------NPCs
world.buildings.forEach((building) => {
	const newNpc = new Npc();
	newNpc.id = `npc${world.countOf.npcs}`;
	newNpc.firstName = getRandomEl(humanFirstNames);
	newNpc.lastName = getRandomEl(humanLastNames);

	// Building details
	newNpc.building = building;
	newNpc.job = getRandomEl(building.jobs);
	newNpc.location = building.location;
	building.npcs.push(newNpc);

	// Settlement details
	newNpc.addToSettlement(newNpc.location);

	// World details
	newNpc.addToWorld(world);
	world.countOf.npcs++;
	myDict.set(newNpc.id, newNpc);
});
//-----------------------------------------------------------------------Quests
//--------------------------------------------------------------Bounties
world.npcs.forEach((npc) => {
	if (executeWithProbability(0.25)) {
		const newQuest = new Bounty();
		newQuest.id = `bounty${world.countOf.quests}`;
		newQuest.owner = npc;
		npc.quests.push(newQuest);

		const listNpcsExceptSelf = world.npcs.filter((n) => n.id != npc.id);
		newQuest.targetNpc = getRandomEl(listNpcsExceptSelf);
		newQuest.addToWorld(world);
		world.countOf.quests++;
		myDict.set(newQuest.id, newQuest);
	}
});

createRetrievalQuest(world, myDict);

console.log(world);
console.log(myDict);

export default world;
