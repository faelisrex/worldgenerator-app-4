import { createTaverns } from './extensions/buildings/createTaverns.js';
import { createFarms } from './extensions/buildings/farms.js';
import { createCaves } from './extensions/points-of-interests/caves.js';
import { createBounties } from './extensions/quests/bountyQuests.js';
import { createRetrievalQuest } from './extensions/quests/retrievalQuests.js';
import { createCities } from './extensions/settlements/cities.js';
import { selectResources } from './extensions/settlements/resources.js';
import { createTowns } from './extensions/settlements/towns.js';
import humanFirstNames from './lists/names/human-firstNames.js';
import humanLastNames from './lists/names/human-lastNames.js';
import regionNames from './lists/names/regionNames.js';
import { getRandomEl } from './utils/math-functions.js';

console.log('world-generator-4.js');

function World(name) {
	return {
		name,
		settlements: [],
		buildings: [],
		npcs: [],
		quests: [],
		items: [],
		pois: [],
		resources: ['farmland'],
		countOf: {
			settlements: 0,
			npcs: 0,
			buildings: 0,
			quests: 0,
			items: 0,
			pois: 0
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
export function Settlement() {
	return {
		id: '',
		type: 'Town',
		name: 'town-unnamed',
		resources: [],
		buildings: [],
		npcs: [],
		pois: [],
		quests: [],
		nResources: 1,
		addToWorld(worldObj) {
			worldObj.settlements.push(this);
		}
	};
}
export function Building() {
	return {
		id: '',
		name: '',
		img: 'town1-sample',
		isPoi: false,
		location: {},
		npcs: []
	};
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
export function Item() {
	return {
		id: '',
		name: ''
	};
}

const genParams = {
	nCities: 1,
	nTowns: 3,
	questChance: {
		bounty: 1 / 3,
		retrieval: 1 / 3
	}
};

const world = new World(getRandomEl(regionNames));
const myDict = new Map();

//--Settlements-------------------------------------------------------Settlements
createCities(genParams, world, myDict);
createTowns(genParams, world, myDict);

//--Resources---------------------------------------------------------Resources
selectResources(world);

//--Buildings---------------------------------------------------------Buildings
createTaverns(world, myDict);
createFarms(world, myDict);

createCaves(5, 10, world, myDict);
//--NPCs--------------------------------------------------------------NPCs
world.buildings.forEach((building) => {
	const newNpc = new Npc();
	newNpc.id = `npc${world.countOf.npcs}`;
	newNpc.type = 'Townfolk';
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
//--Quests------------------------------------------------------------Quests
createBounties(genParams.questChance.bounty, world, myDict);
createRetrievalQuest(genParams.questChance.retrieval, world, myDict);

console.log(world);
console.log(myDict);

export default world;
