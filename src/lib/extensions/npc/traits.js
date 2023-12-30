import { randn_bm } from '../../utils/math-functions';

//law, justice, power, cunning, fairness, hunger for knowledge, compassion, risk-taking, loyalty, and independence

function changeValuesCN(worldObj) {
	const chaoticNpcs = worldObj.npcs.filter((npc) => npc.alignment === 'CN');
	chaoticNpcs.forEach((npc) => {
		npc.values.find((value) => value.name === 'law').value = -25;
		npc.values.find((value) => value.name === 'justice').value = -20;
		npc.values.find((value) => value.name === 'power').value = 30;
		npc.values.find((value) => value.name === 'cunning').value = 20;
		npc.values.find((value) => value.name === 'independence').value = 20;
	});
}

export function assignValues(worldObj) {
	worldObj.npcs.forEach((npc) => {
		changeValuesCN(worldObj);

		let law = npc.values.find((value) => value.name === 'law');
		law.value = Math.round(randn_bm(-50, 50, 1) + law.value);
		law.description = describeLawValue(law);

		let justice = npc.values.find((value) => value.name === 'justice');
		justice.value = Math.round(randn_bm(-50, 50, 1) + justice.value);
		justice.description = describeJusticeValue(justice);

		let power = npc.values.find((value) => value.name === 'power');
		power.value = Math.round(randn_bm(-50, 50, 1) + power.value);
		power.description = describePowerValue(power);

		let cunning = npc.values.find((value) => value.name === 'cunning');
		cunning.value = Math.round(randn_bm(-50, 50, 1) + cunning.value);
		cunning.description = describeCunningValue(cunning);

		let fairness = npc.values.find((value) => value.name === 'fairness');
		fairness.value = Math.round(randn_bm(-50, 50, 1) + fairness.value);
		fairness.description = describeFairnessValue(fairness);

		let knowledge = npc.values.find((value) => value.name === 'knowledge');
		knowledge.value = Math.round(randn_bm(-50, 50, 1) + knowledge.value);
		knowledge.description = describeKnowledgeValue(knowledge);

		let compassion = npc.values.find((value) => value.name === 'compassion');
		compassion.value = Math.round(randn_bm(-50, 50, 1) + compassion.value);
		compassion.description = describeCompassionValue(compassion);

		let riskTaking = npc.values.find((value) => value.name === 'riskTaking');
		riskTaking.value = Math.round(randn_bm(-50, 50, 1) + riskTaking.value);
		riskTaking.description = describeRiskTakingValue(riskTaking);

		let loyalty = npc.values.find((value) => value.name === 'loyalty');
		loyalty.value = Math.round(randn_bm(-50, 50, 1) + loyalty.value);
		loyalty.description = describeLoyaltyValue(loyalty);

		let independence = npc.values.find((value) => value.name === 'independence');
		independence.value = Math.round(randn_bm(-50, 50, 1) + independence.value);
		independence.description = describeIndependenceValue(independence);
	});
}

function describeLawValue(law) {
	const test = law.value;
	let lawDescription = '';
	switch (true) {
		case test > 40:
			lawDescription =
				'Adheres strictly to the letter of the law, values order and authority above all else';
			law.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			lawDescription =
				'Respects and upholds laws but may show flexibility in certain situations for the greater good';
			law.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			lawDescription = 'Values law and order but may question or challenge unjust laws';
			law.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			lawDescription =
				'Takes a pragmatic approach to the law, follows laws when convenient but not strictly bound by it';
			break;
		case test >= -25 && test <= -11:
			lawDescription =
				'Views laws skeptically and may occasionally break them if they conflict with personal values';
			law.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			lawDescription = 'Disregards laws that are perceived as unjust or oppressive';
			law.isNegative = true;
			break;
		case test < -40:
			lawDescription =
				'Rejects the concept of law entirely, embraces an anarchic or rebellious stance';
			law.isNegative = true;
			break;
		default:
			break;
	}

	return lawDescription;
}

function describeJusticeValue(justice) {
	const test = justice.value;
	let justiceDescription = '';
	switch (true) {
		case test > 40:
			justiceDescription = 'Devotes life to upholds justice, even at personal cost';
			justice.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			justiceDescription =
				'Passionate about fairness and will actively work towards corrects injustices';
			justice.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			justiceDescription = 'Values justice and fairness, seeks to ensure equitable treatment';
			justice.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			justiceDescription =
				'Maintains a neutral stance on justice, considers it in specific situations';
			break;
		case test >= -25 && test <= -11:
			justiceDescription =
				'Skeptical of justice, acknowledges its importance but sees potential flaws';
			justice.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			justiceDescription = 'Views the pursuit of justice unfavorably, believs it can lead to chaos';
			justice.isNegative = true;
			break;
		case test < -40:
			justiceDescription =
				'Disgusted by the idea of justice, sees it as an illusion or a tool for manipulation';
			justice.isNegative = true;
			break;
		default:
			break;
	}

	return justiceDescription;
}

function describePowerValue(power) {
	const test = power.value;
	let powerDescription = '';
	switch (true) {
		case test > 40:
			powerDescription = 'Seeks power over others as the ultimate goal in life';
			power.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			powerDescription =
				'Ambitious, desires influence and power over others to achieve personal goals';
			power.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			powerDescription = 'Values personal achievement and influence over others';
			power.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			powerDescription =
				'Maintains a balanced approach to power, uses power when necessary but does not actively seek it';
			break;
		case test >= -25 && test <= -11:
			powerDescription = 'Skeptical of power, sees it as corrupting and potentially harmful';
			power.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			powerDescription = 'Disdains power, views it as a source of oppression and inequality';
			power.isNegative = true;
			break;
		case test < -40:
			powerDescription = 'Rejects power entirely, prefers a life of simplicity and independence.';
			power.isNegative = true;
			break;
		default:
			break;
	}

	return powerDescription;
}

function describeCunningValue(cunning) {
	const test = cunning.value;
	let cunningDescription = '';

	switch (true) {
		case test > 40:
			cunningDescription =
				'Highly strategic and crafty, excels in planning and is very manipulative';
			cunning.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			cunningDescription =
				'Clever and strategic, uses cunning and manipulation to achieve goals and to get rid of others';
			cunning.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			cunningDescription =
				'Adaptable and capable of strategic thinking while manipulating others to get what they want';
			cunning.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			cunningDescription =
				'Takes a straightforward approach to getting what they want, avoids cunning or manipulation';
			break;
		case test >= -25 && test <= -11:
			cunningDescription = 'Views being cunning unfavorably, prefers honesty and transparency';
			cunning.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			cunningDescription = 'Disdains being cunning, sees it as deceitful and untrustworthy';
			cunning.isNegative = true;
			break;
		case test < -40:
			cunningDescription = 'Rejects being cunning entirely, values straightforwardness and honesty';
			cunning.isNegative = true;
			break;
		default:
			break;
	}

	return cunningDescription;
}

function describeFairnessValue(fairness) {
	const test = fairness.value;
	let fairnessDescription = '';
	switch (true) {
		case test > 40:
			fairnessDescription = 'Dedicates life to ensure fair treatment for everyone at personal cost';
			fairness.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			fairnessDescription =
				'Strongly believes in fairness and works to correct imbalances, even at personal cost';
			fairness.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			fairnessDescription = 'Values fairness and equal treatment, seeks to avoid favoritism';
			fairness.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			fairnessDescription =
				'Takes a pragmatic approach to fairness, considers it in specific situations';
			break;
		case test >= -25 && test <= -11:
			fairnessDescription =
				'Views fairness skeptically, acknowledges its importance but notes potential challenges';
			fairness.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			fairnessDescription =
				'Disdains the concept of fairness, sees it as impractical or unattainable';
			fairness.isNegative = true;
			break;
		case test < -40:
			fairnessDescription =
				'Rejects fairness entirely, embraces a worldview that prioritizes individual interests';
			fairness.isNegative = true;
			break;
		default:
			break;
	}
	return fairnessDescription;
}

function describeKnowledgeValue(knowledge) {
	const test = knowledge.value;
	let knowledgeDescription = '';

	switch (true) {
		case test > 40:
			knowledgeDescription =
				'Devotes life to the pursuit of knowledge, regardless of whose head is cut off';
			knowledge.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			knowledgeDescription = 'Highly curious and actively seeks new information and experiences';
			knowledge.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			knowledgeDescription = 'Values knowledge and seeks to expand personal understanding';
			knowledge.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			knowledgeDescription =
				'Maintains a balanced approach to knowledge, seeks it when relevant but not obsessively';
			break;
		case test >= -25 && test <= -11:
			knowledgeDescription = 'Views excessive curiosity as potentially harmful, prefers stability';
			knowledge.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			knowledgeDescription =
				'Disdains the pursuit of knowledge, sees it as pointless or disruptive';
			knowledge.isNegative = true;
			break;
		case test < -40:
			knowledgeDescription = 'Rejects the idea of knowledge, prefers a simple and unexamined life';
			knowledge.isNegative = true;
			break;
		default:
			break;
	}

	return knowledgeDescription;
}

function describeCompassionValue(compassion) {
	const test = compassion.value;
	let compassionDescription = '';

	switch (true) {
		case test > 40:
			compassionDescription =
				'Radiates compassion, places the well-being of everyone else above personal interests';
			compassion.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			compassionDescription = 'Highly empathetic and actively works to help those in need';
			compassion.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			compassionDescription = 'Values compassion and helps others when possible';
			compassion.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			compassionDescription =
				'Takes a balanced approach to compassion, helps when it aligns with personal interests';
			break;
		case test >= -25 && test <= -11:
			compassionDescription =
				'Views excessive compassion as potentially harmful, promoting dependency';
			compassion.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			compassionDescription = 'Disdains excessive compassion, sees it as naive or misguided';
			compassion.isNegative = true;
			break;
		case test < -40:
			compassionDescription = 'Rejects the idea of compassion, prioritizes self-interest';
			compassion.isNegative = true;
			break;
		default:
			break;
	}
	return compassionDescription;
}

function describeRiskTakingValue(riskTaking) {
	const test = riskTaking.value;
	let riskTakingDescription = '';
	switch (true) {
		case test > 40:
			riskTakingDescription =
				'Fearless, actively seeks out high-risk endeavors, and respects risk-takers';
			riskTaking.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			riskTakingDescription =
				'Adventurous and willing to take calculated risks for even potential rewards';
			riskTaking.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			riskTakingDescription = 'Open to moderate risk-taking when the potential benefits justify it';
			riskTaking.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			riskTakingDescription = 'Takes a balanced approach to taking risk, avoids unnecessary danger';
			break;
		case test >= -25 && test <= -11:
			riskTakingDescription = 'Views risk unfavorably, prefers stability and predictability';
			riskTaking.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			riskTakingDescription = 'Disdains risk, sees it as reckless and unnecessary';
			riskTaking.isNegative = true;
			break;
		case test < -40:
			riskTakingDescription =
				'Rejects the idea of risk entirely, prefers a life of caution and predictability';
			riskTaking.isNegative = true;
			break;
		default:
			break;
	}
	return riskTakingDescription;
}

function describeLoyaltyValue(loyalty) {
	const test = loyalty.value;
	let loyaltyDescription = '';

	switch (true) {
		case test > 40:
			loyaltyDescription = 'Has the highest regard for loyalty, considers it a paramount virtue';
			loyalty.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			loyaltyDescription = 'Greatly prizes loyalty, considers it a vital and honorable quality';
			loyalty.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			loyaltyDescription =
				'Values loyalty as an important quality, recognizes its significance in relationships and endeavors';
			loyalty.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			loyaltyDescription =
				"Doesn't particularly value or devalue loyalty. Has a neutral stance on the concept and may approach loyalty on a case-by-case basis";
			break;
		case test >= -25 && test <= -11:
			loyaltyDescription =
				'Views loyalty unfavorably, sees it as potentially restrictive or misguided';
			loyalty.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			loyaltyDescription = 'Disdains loyalty, considers it a weakness or a form of blind obedience';
			loyalty.isNegative = true;
			break;
		case test < -40:
			loyaltyDescription = 'Is disgusted by the idea of loyalty, rejects it entirely';
			loyalty.isNegative = true;
			break;
		default:
			break;
	}

	return loyaltyDescription;
}

function describeIndependenceValue(independence) {
	const test = independence.value;
	let independenceDescription = '';

	switch (true) {
		case test > 40:
			independenceDescription =
				'Values complete independence and autonomy above everything else and will die for it';
			independence.isPositive = true;
			break;
		case test >= 26 && test <= 40:
			independenceDescription =
				'Highly independent but open to collaboration when it aligns with personal goals and will fight for it';
			independence.isPositive = true;
			break;
		case test >= 11 && test <= 25:
			independenceDescription =
				'Appreciates independence but recognizes the value of working with others';
			independence.isPositive = true;
			break;
		case test >= -10 && test <= 10:
			independenceDescription =
				'Maintains a balanced approach to independence, seeks it when necessary and values cooperation';
			break;
		case test >= -25 && test <= -11:
			independenceDescription =
				'Views excessive independence as potentially isolating or impractical';
			independence.isNegative = true;
			break;
		case test >= -40 && test <= -26:
			independenceDescription =
				'Disdains independence, sees it as a barrier to progress and collaboration';
			independence.isNegative = true;
			break;
		case test < -40:
			independenceDescription =
				'Rejects the idea of independence entirely, values interdependence and collaboration';
			independence.isNegative = true;
			break;
		default:
			break;
	}

	return independenceDescription;
}
