import { randn_bm } from '../../utils/math-functions';

//law, justice, power, cunning, fairness, hunger for knowledge, compassion, risk-taking, loyalty, and independence
export function assignValues(worldObj) {
	worldObj.npcs.forEach((npc) => {
		if (npc.type != 'Townfolk') {
			console.log(npc);
		}
		npc.values.law = Math.round(randn_bm(-50, 50, 1) + npc.values.law);
		npc.values.justice = Math.round(randn_bm(-50, 50, 1) + npc.values.justice);
		npc.values.power = Math.round(randn_bm(-50, 50, 1) + npc.values.power);
		npc.values.cunning = Math.round(randn_bm(-50, 50, 1) + npc.values.cunning);
		npc.values.fairness = Math.round(randn_bm(-50, 50, 1) + npc.values.fairness);
		npc.values.knowledge = Math.round(randn_bm(-50, 50, 1) + npc.values.knowledge);
		npc.values.compassion = Math.round(randn_bm(-50, 50, 1) + npc.values.compassion);
		npc.values.riskTaking = Math.round(randn_bm(-50, 50, 1) + npc.values.riskTaking);
		npc.values.loyalty = Math.round(randn_bm(-50, 50, 1) + npc.values.loyalty);
		npc.values.independence = Math.round(randn_bm(-50, 50, 1) + npc.values.independence);
	});
}
