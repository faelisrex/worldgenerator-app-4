import { Quest } from '../../world-generator-4.js';
import { executeWithProbability, getRandomEl } from '../../utils/math-functions.js';

function Bounty() {
	const quest = new Quest();
	return Object.assign({}, quest, {
		owner: {},
		type: 'Bounty',
		verbsFunny: [
			'stabbing them with a sharp stick',
			'poisoning them',
			'pushing them off the edge of a cliff',
			'sending them on a quest to find the legendary left-handed dagger',
			'challenging them to a duel with rubber chickens',
			'defeating them in a heated thumb wrestling match',
			'hiring a team of bumbling assassins with questionable skills',
			'luring them into a trap with an irresistible offer for free ale',
			'launching an army of prankster goblins armed with whoopee cushions',
			'shouting "BOO!" in the dark and hoping for the best',
			'sending a horde of angry ducks armed with quills',
			'confronting them with an army of relentless kittens armed with cuteness',
			'unleashing the fearsome, legendary Sock Puppet Army upon them',
			'challenging them to a duel of wit in a game of rock, parchment, shears',
			'ambushing them with a surprise birthday party (and exploding cake)',
			'turning their allies into enthusiastic yet incompetent minions',
			'sending a pack of mischievous imps armed with itching powder',
			'initiating a dance-off to the death (or at least embarrassment)',
			'hiring a bard to compose a terribly embarrassing ballad about them',
			'engaging in a tickle fight with feathers of doom',
			'covertly replacing their weapon with a rubber sword',
			'launching an army of rogue squirrels trained in guerrilla warfare'
		],
		verbsSerious: [
			'dispatching them with precision archery',
			'administering a lethal poison',
			'ambushing them under the cover of darkness',
			'engaging in a fierce sword duel',
			'utilizing a strategically placed trap',
			'hiring a skilled assassin to eliminate them',
			'leading them into a deadly ambush',
			'manipulating rival factions to turn against them',
			'sabotaging their equipment before a critical mission',
			'exposing them to a deadly magical curse',
			'using advanced stealth techniques to neutralize them',
			'exploiting their fears and phobias for a tactical advantage',
			'leveraging information to tarnish their reputation',
			'turning their allies against them through diplomacy',
			'engineering a staged accident to appear as natural',
			'sending a highly trained infiltrator to eliminate them silently',
			'arranging a strategic diversion to create vulnerability',
			'utilizing a trained creature, like a venomous serpent, for the attack'
		],
		targetNpc: {}
	});
}

export function createBounties(probability, worldObj, dict) {
	worldObj.npcs.forEach((npc) => {
		if (executeWithProbability(probability)) {
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
