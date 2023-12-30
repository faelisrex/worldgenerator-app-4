import { randn_bm } from '../../utils/math-functions';

//law, justice, power, cunning, fairness, hunger for knowledge, compassion, risk-taking, loyalty, and independence
export function assignValues(worldObj) {
	worldObj.npcs.forEach((npc) => {
		if (npc.type != 'Townfolk') {
			console.log(npc);
		}
		npc.values.law.value = Math.round(randn_bm(-50, 50, 1) + npc.values.law.value);
		npc.values.justice.value = Math.round(randn_bm(-50, 50, 1) + npc.values.justice.value);
		npc.values.power.value = Math.round(randn_bm(-50, 50, 1) + npc.values.power.value);
		npc.values.cunning.value = Math.round(randn_bm(-50, 50, 1) + npc.values.cunning.value);
		npc.values.fairness.value = Math.round(randn_bm(-50, 50, 1) + npc.values.fairness.value);
		npc.values.knowledge.value = Math.round(randn_bm(-50, 50, 1) + npc.values.knowledge.value);
		npc.values.compassion.value = Math.round(randn_bm(-50, 50, 1) + npc.values.compassion.value);
		npc.values.riskTaking.value = Math.round(randn_bm(-50, 50, 1) + npc.values.riskTaking.value);
		npc.values.loyalty.value = Math.round(randn_bm(-50, 50, 1) + npc.values.loyalty.value);
		npc.values.independence.value = Math.round(
			randn_bm(-50, 50, 1) + npc.values.independence.value
		);
		npc.values.law.description = describeLawValue(npc);
		npc.values.justice.description = describeJusticeValue(npc);
		npc.values.power.description = describePowerValue(npc);
		npc.values.cunning.description = describeCunningValue(npc);
		npc.values.fairness.description = describeFairnessValue(npc);
		npc.values.knowledge.description = describeKnowledgeValue(npc);
		npc.values.compassion.description = describeCompassionValue(npc);
		npc.values.riskTaking.description = describeRiskTakingValue(npc);
		npc.values.loyalty.description = describeLoyaltyValue(npc);
		npc.values.independence.description = describeIndependenceValue(npc);
	});
}

function describeLawValue(npc) {
	const test = npc.values.law.value;
	let lawDescription = '';
	switch (true) {
		case test > 40:
			lawDescription =
				'Adheres strictly to the letter of the law, values order and authority above all else';
			npc.values.law.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			lawDescription =
				'Respects and upholds laws but may show flexibility in certain situations for the greater good';
			npc.values.law.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			lawDescription = 'Values law and order but may question or challenge unjust laws';
			npc.values.law.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			lawDescription =
				'Takes a pragmatic approach to the law, follows laws when convenient but not strictly bound by it';
			break;
		case test >= -25 && test <= -11:
			lawDescription =
				'Views laws skeptically and may occasionally break them if they conflict with personal values';
			npc.values.law.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			lawDescription = 'Disregards laws that are perceived as unjust or oppressive';
			npc.values.law.isNegative = true;
			break;
		case test < -40:
			lawDescription =
				'Rejects the concept of law entirely, embraces an anarchic or rebellious stance';
			npc.values.law.isNegative = true;
			break;
		default:
			break;
	}

	return lawDescription;
}

function describeJusticeValue(npc) {
	const test = npc.values.justice.value;
	let justiceDescription = '';
	switch (true) {
		case test > 40:
			justiceDescription = 'Devotes life to upholds justice, even at personal cost';
			npc.values.justice.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			justiceDescription =
				'Passionate about fairness and will actively work towards corrects injustices';
			npc.values.justice.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			justiceDescription = 'Values justice and fairness, seeks to ensure equitable treatment';
			npc.values.justice.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			justiceDescription =
				'Maintains a neutral stance on justice, considers it in specific situations';
			break;
		case test >= -25 && test <= -11:
			justiceDescription =
				'Skeptical of justice, acknowledges its importance but sees potential flaws';
			npc.values.justice.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			justiceDescription = 'Views the pursuit of justice unfavorably, believs it can lead to chaos';
			npc.values.justice.isNegative = true;
			break;
		case test < -40:
			justiceDescription =
				'Disgusted by the idea of justice, sees it as an illusion or a tool for manipulation';
			npc.values.justice.isNegative = true;
			break;
		default:
			break;
	}

	return justiceDescription;
}

function describePowerValue(npc) {
	const test = npc.values.power.value;
	let powerDescription = '';
	switch (true) {
		case test > 40:
			powerDescription = 'Seeks power over others as the ultimate goal in life';
			npc.values.power.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			powerDescription =
				'Ambitious, desires influence and power over others to achieve personal goals';
			npc.values.power.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			powerDescription = 'Values personal achievement and influence over others';
			npc.values.power.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			powerDescription =
				'Maintains a balanced approach to power, uses power when necessary but does not actively seek it';
			break;
		case test >= -25 && test <= -11:
			powerDescription = 'Skeptical of power, sees it as corrupting and potentially harmful';
			npc.values.power.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			powerDescription = 'Disdains power, views it as a source of oppression and inequality';
			npc.values.power.isNegative = true;
			break;
		case test < -40:
			powerDescription = 'Rejects power entirely, prefers a life of simplicity and independence.';
			npc.values.power.isNegative = true;
			break;
		default:
			break;
	}

	return powerDescription;
}

function describeCunningValue(npc) {
	const test = npc.values.cunning.value;
	let cunningDescription = '';

	switch (true) {
		case test > 40:
			cunningDescription =
				'Highly strategic and crafty, excels in planning and is very manipulative';
			npc.values.cunning.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			cunningDescription =
				'Clever and strategic, uses cunning and manipulation to achieve goals and to get rid of others';
			npc.values.cunning.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			cunningDescription =
				'Adaptable and capable of strategic thinking while manipulating others to get what they want';
			npc.values.cunning.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			cunningDescription =
				'Takes a straightforward approach to getting what they want, avoids cunning or manipulation';
			break;
		case test >= -25 && test <= -11:
			cunningDescription = 'Views being cunning unfavorably, prefers honesty and transparency';
			npc.values.cunning.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			cunningDescription = 'Disdains being cunning, sees it as deceitful and untrustworthy';
			npc.values.cunning.isNegative = true;
			break;
		case test < -40:
			cunningDescription = 'Rejects being cunning entirely, values straightforwardness and honesty';
			npc.values.cunning.isNegative = true;
			break;
		default:
			break;
	}

	return cunningDescription;
}

function describeFairnessValue(npc) {
	const test = npc.values.fairness.value;
	let fairnessDescription = '';
	switch (true) {
		case test > 40:
			fairnessDescription = 'Dedicates life to ensure fair treatment for everyone at personal cost';
			npc.values.fairness.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			fairnessDescription =
				'Strongly believes in fairness and works to correct imbalances, even at personal cost';
			npc.values.fairness.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			fairnessDescription = 'Values fairness and equal treatment, seeks to avoid favoritism';
			npc.values.fairness.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			fairnessDescription =
				'Takes a pragmatic approach to fairness, considers it in specific situations';
			break;
		case test >= -25 && test <= -11:
			fairnessDescription =
				'Views fairness skeptically, acknowledges its importance but notes potential challenges';
			npc.values.fairness.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			fairnessDescription =
				'Disdains the concept of fairness, sees it as impractical or unattainable';
			npc.values.fairness.isNegative = true;
			break;
		case test < -40:
			fairnessDescription =
				'Rejects fairness entirely, embraces a worldview that prioritizes individual interests';
			npc.values.fairness.isNegative = true;
			break;
		default:
			break;
	}
	return fairnessDescription;
}

function describeKnowledgeValue(npc) {
	const test = npc.values.knowledge.value;
	let knowledgeDescription = '';

	switch (true) {
		case test > 40:
			knowledgeDescription =
				'Devotes life to the pursuit of knowledge, regardless of whose head is cut off';
			npc.values.knowledge.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			knowledgeDescription = 'Highly curious and actively seeks new information and experiences';
			npc.values.knowledge.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			knowledgeDescription = 'Values knowledge and seeks to expand personal understanding';
			npc.values.knowledge.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			knowledgeDescription =
				'Maintains a balanced approach to knowledge, seeks it when relevant but not obsessively';
			break;
		case test >= -25 && test <= -11:
			knowledgeDescription = 'Views excessive curiosity as potentially harmful, prefers stability';
			npc.values.knowledge.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			knowledgeDescription =
				'Disdains the pursuit of knowledge, sees it as pointless or disruptive';
			npc.values.knowledge.isNegative = true;
			break;
		case test < -40:
			knowledgeDescription = 'Rejects the idea of knowledge, prefers a simple and unexamined life';
			npc.values.knowledge.isNegative = true;
			break;
		default:
			break;
	}

	return knowledgeDescription;
}

function describeCompassionValue(npc) {
	const test = npc.values.compassion.value;
	let compassionDescription = '';

	switch (true) {
		case test > 40:
			compassionDescription =
				'Radiates compassion, places the well-being of everyone else above personal interests';
			npc.values.compassion.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			compassionDescription = 'Highly empathetic and actively works to help those in need';
			npc.values.compassion.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			compassionDescription = 'Values compassion and helps others when possible';
			npc.values.compassion.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			compassionDescription =
				'Takes a balanced approach to compassion, helps when it aligns with personal interests';
			break;
		case test >= -25 && test <= -11:
			compassionDescription =
				'Views excessive compassion as potentially harmful, promoting dependency';
			npc.values.compassion.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			compassionDescription = 'Disdains excessive compassion, sees it as naive or misguided';
			npc.values.compassion.isNegative = true;
			break;
		case test < -40:
			compassionDescription = 'Rejects the idea of compassion, prioritizes self-interest';
			npc.values.compassion.isNegative = true;
			break;
		default:
			break;
	}
	return compassionDescription;
}

function describeRiskTakingValue(npc) {
	const test = npc.values.riskTaking.value;
	let riskTakingDescription = '';
	switch (true) {
		case test > 40:
			riskTakingDescription =
				'Fearless, actively seeks out high-risk endeavors, and respects risk-takers';
			npc.values.riskTaking.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			riskTakingDescription =
				'Adventurous and willing to take calculated risks for even potential rewards';
			npc.values.riskTaking.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			riskTakingDescription = 'Open to moderate risk-taking when the potential benefits justify it';
			npc.values.riskTaking.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			riskTakingDescription = 'Takes a balanced approach to taking risk, avoids unnecessary danger';
			break;
		case test >= -25 && test <= -11:
			riskTakingDescription = 'Views risk unfavorably, prefers stability and predictability';
			npc.values.riskTaking.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			riskTakingDescription = 'Disdains risk, sees it as reckless and unnecessary';
			npc.values.riskTaking.isNegative = true;
			break;
		case test < -40:
			riskTakingDescription =
				'Rejects the idea of risk entirely, prefers a life of caution and predictability';
			npc.values.riskTaking.isNegative = true;
			break;
		default:
			break;
	}
	return riskTakingDescription;
}

function describeLoyaltyValue(npc) {
	const test = npc.values.loyalty.value;
	let loyaltyDescription = '';

	switch (true) {
		case test > 40:
			loyaltyDescription = 'Has the highest regard for loyalty, considers it a paramount virtue';
			npc.values.loyalty.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			loyaltyDescription = 'Greatly prizes loyalty, considers it a vital and honorable quality';
			npc.values.loyalty.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			loyaltyDescription =
				'Values loyalty as an important quality, recognizes its significance in relationships and endeavors';
			npc.values.loyalty.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			loyaltyDescription =
				"Doesn't particularly value or devalue loyalty. Has a neutral stance on the concept and may approach loyalty on a case-by-case basis";
			break;
		case test >= -25 && test <= -11:
			loyaltyDescription =
				'Views loyalty unfavorably, sees it as potentially restrictive or misguided';
			npc.values.loyalty.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			loyaltyDescription = 'Disdains loyalty, considers it a weakness or a form of blind obedience';
			npc.values.loyalty.isNegative = true;
			break;
		case test < -40:
			loyaltyDescription = 'Is disgusted by the idea of loyalty, rejects it entirely';
			npc.values.loyalty.isNegative = true;
			break;
		default:
			break;
	}

	return loyaltyDescription;
}

function describeIndependenceValue(npc) {
	const test = npc.values.independence.value;
	let independenceDescription = '';

	switch (true) {
		case test > 40:
			independenceDescription =
				'Values complete independence and autonomy above everything else and will die for it';
			npc.values.independence.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			independenceDescription =
				'Highly independent but open to collaboration when it aligns with personal goals and will fight for it';
			npc.values.independence.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			independenceDescription =
				'Appreciates independence but recognizes the value of working with others';
			npc.values.independence.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			independenceDescription =
				'Maintains a balanced approach to independence, seeks it when necessary and values cooperation';
			break;
		case test >= -25 && test <= -11:
			independenceDescription =
				'Views excessive independence as potentially isolating or impractical';
			npc.values.independence.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			independenceDescription =
				'Disdains independence, sees it as a barrier to progress and collaboration';
			npc.values.independence.isNegative = true;
			break;
		case test < -40:
			independenceDescription =
				'Rejects the idea of independence entirely, values interdependence and collaboration';
			npc.values.independence.isNegative = true;
			break;
		default:
			break;
	}

	return independenceDescription;
}
