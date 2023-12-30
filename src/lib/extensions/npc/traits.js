import { randn_bm } from '../../utils/math-functions';

//law, justice, power, greed, cunning, fairness, hunger for knowledge, compassion, risk-taking, loyalty, and independence

const traitBP = {
	extremePositive: { min: 41 },
	midPositive: { min: 26, max: 40 },
	lowPositive: { min: 11, max: 25 },
	neutral: { min: -10, max: 10 },
	lowNegative: { min: -25, max: -9 },
	midNegative: { min: -40, max: -26 },
	extremeNegative: { max: -40 }
};

function changeValuesCN(worldObj) {
	const chaoticNpcs = worldObj.npcs.filter((npc) => npc.alignment === 'CN');
	chaoticNpcs.forEach((npc) => {
		npc.values.find((value) => value.name === 'law').valModifier = -25;
		npc.values.find((value) => value.name === 'justice').valModifier = -20;
		npc.values.find((value) => value.name === 'power').valModifier = 30;
		npc.values.find((value) => value.name === 'cunning').valModifier = 20;
		npc.values.find((value) => value.name === 'independence').valModifier = 20;
	});
}

export function assignValues(worldObj) {
	worldObj.npcs.forEach((npc) => {
		changeValuesCN(worldObj);

		let law = npc.values.find((value) => value.name === 'law');
		law.value = Math.round(randn_bm(-50, 50, 1) + law.valModifier);
		law.description = describeLawValue(law);

		let justice = npc.values.find((value) => value.name === 'justice');
		justice.value = Math.round(randn_bm(-50, 50, 1) + justice.valModifier);
		justice.description = describeJusticeValue(justice);

		let power = npc.values.find((value) => value.name === 'power');
		power.value = Math.round(randn_bm(-50, 50, 1) + power.valModifier);
		power.description = describePowerValue(power);

		let cunning = npc.values.find((value) => value.name === 'cunning');
		cunning.value = Math.round(randn_bm(-50, 50, 1) + cunning.valModifier);
		cunning.description = describeCunningValue(cunning);

		let fairness = npc.values.find((value) => value.name === 'fairness');
		fairness.value = Math.round(randn_bm(-50, 50, 1) + fairness.valModifier);
		fairness.description = describeFairnessValue(fairness);

		let knowledge = npc.values.find((value) => value.name === 'knowledge');
		knowledge.value = Math.round(randn_bm(-50, 50, 1) + knowledge.valModifier);
		knowledge.description = describeKnowledgeValue(knowledge);

		let compassion = npc.values.find((value) => value.name === 'compassion');
		compassion.value = Math.round(randn_bm(-50, 50, 1) + compassion.valModifier);
		compassion.description = describeCompassionValue(compassion);

		let riskTaking = npc.values.find((value) => value.name === 'risk taking');
		riskTaking.value = Math.round(randn_bm(-50, 50, 1) + riskTaking.valModifier);
		riskTaking.description = describeRiskTakingValue(riskTaking);

		let loyalty = npc.values.find((value) => value.name === 'loyalty');
		loyalty.value = Math.round(randn_bm(-50, 50, 1) + loyalty.valModifier);
		loyalty.description = describeLoyaltyValue(loyalty);

		let independence = npc.values.find((value) => value.name === 'independence');
		independence.value = Math.round(randn_bm(-50, 50, 1) + independence.valModifier);
		independence.description = describeIndependenceValue(independence);

		let greed = npc.values.find((value) => value.name === 'greed');
		greed.value = Math.round(randn_bm(-50, 50, 1) + greed.valModifier);
		greed.description = describeGreedValue(greed);

		console.table(npc.values);
	});
}

function describeLawValue(law) {
	const test = law.value;
	let lawDescription = '';
	switch (true) {
		case test >= traitBP.extremePositive.min:
			lawDescription =
				'Adheres strictly to the letter of the law, respects and values order and authority above all else';
			law.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			lawDescription =
				'Respects and upholds laws, may show some flexibility in certain situations if compassionate';
			law.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			lawDescription = 'Values law and order but may question or challenge unjust laws';
			law.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			lawDescription =
				'Takes a pragmatic approach to the law, follows laws when convenient but not strictly bound by it';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			lawDescription =
				'Views laws skeptically and may occasionally break them if they conflict with other personal values';
			law.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			lawDescription =
				'Disregards laws, especially those that are perceived as unjust or oppressive';
			law.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
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
		case test >= traitBP.extremePositive.min:
			justiceDescription = 'Devotes life to upholds justice, even at personal cost';
			justice.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			justiceDescription =
				'Passionate about fairness and will actively work towards corrects injustices';
			justice.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			justiceDescription = 'Values justice and fairness, seeks to ensure equitable treatment';
			justice.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			justiceDescription =
				'Maintains a neutral stance on justice, considers it in specific situations';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			justiceDescription =
				'Skeptical of justice, acknowledges its importance but sees potential flaws';
			justice.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			justiceDescription =
				'Views the pursuit of justice unfavorably, believes it can lead to chaos';
			justice.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
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
		case test >= traitBP.extremePositive.min:
			powerDescription = 'Seeks power over others as the ultimate goal in life';
			power.isNegative = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			powerDescription =
				'Ambitious, desires influence and power over others to achieve personal goals';
			power.isNegative = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			powerDescription = 'Values personal achievement and influence over others';
			power.isNegative = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			powerDescription =
				'Maintains a balanced approach to power, uses power when necessary but does not actively seek it';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			powerDescription = 'Skeptical of power, sees it as corrupting and potentially harmful';
			power.isPositive = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			powerDescription = 'Disdains power, views it as a source of oppression and inequality';
			power.isPositive = true;
			break;
		case test < traitBP.extremeNegative.max:
			powerDescription = 'Rejects power entirely, prefers a life of simplicity and independence.';
			power.isPositive = true;
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
		case test >= traitBP.extremePositive.min:
			cunningDescription =
				'Highly strategic and crafty, excels in planning and is very manipulative';
			cunning.isNegative = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			cunningDescription =
				'Clever and strategic, uses cunning and manipulation to achieve goals and to get rid of others';
			cunning.isNegative = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			cunningDescription =
				'Adaptable and capable of strategic thinking while manipulating others to get what they want';
			cunning.isNegative = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			cunningDescription =
				'Takes a straightforward approach to getting what they want, avoids cunning or manipulation';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			cunningDescription = 'Views being cunning unfavorably, prefers honesty and transparency';
			cunning.isPositive = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			cunningDescription = 'Disdains being cunning, sees it as deceitful and untrustworthy';
			cunning.isPositive = true;
			break;
		case test < traitBP.extremeNegative.max:
			cunningDescription = 'Rejects being cunning entirely, values straightforwardness and honesty';
			cunning.isPositive = true;
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
		case test >= traitBP.extremePositive.min:
			fairnessDescription = 'Dedicates life to ensure fair treatment for everyone at personal cost';
			fairness.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			fairnessDescription =
				'Strongly believes in fairness and works to correct imbalances, even at personal cost';
			fairness.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			fairnessDescription = 'Values fairness and equal treatment, seeks to avoid favoritism';
			fairness.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			fairnessDescription =
				'Takes a pragmatic approach to fairness, considers it in specific situations';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			fairnessDescription =
				'Views fairness skeptically, acknowledges its importance but notes potential challenges';
			fairness.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			fairnessDescription =
				'Disdains the concept of fairness, sees it as impractical or unattainable';
			fairness.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
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
		case test >= traitBP.extremePositive.min:
			knowledgeDescription =
				'Devotes life to the pursuit of knowledge, regardless of whose head is cut off';
			knowledge.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			knowledgeDescription = 'Highly curious and actively seeks new information and experiences';
			knowledge.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			knowledgeDescription = 'Values knowledge and seeks to expand personal understanding';
			knowledge.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			knowledgeDescription =
				'Maintains a balanced approach to knowledge, seeks it when relevant but not obsessively';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			knowledgeDescription = 'Views curiosity as potentially harmful, prefers stability';
			knowledge.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			knowledgeDescription =
				'Disdains the pursuit of knowledge, sees it as pointless or disruptive';
			knowledge.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
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
		case test >= traitBP.extremePositive.min:
			compassionDescription =
				'Radiates compassion, places the well-being of everyone else above personal interests';
			compassion.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			compassionDescription = 'Highly empathetic and actively works to help those in need';
			compassion.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			compassionDescription = 'Values compassion and helps others when possible';
			compassion.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			compassionDescription =
				'Takes a balanced approach to compassion, helps when it aligns with personal interests';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			compassionDescription = 'Views compassion as potentially harmful, promoting dependency';
			compassion.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			compassionDescription =
				'Disdains compassion, sees it as naive or misguided, enabling dependency';
			compassion.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
			compassionDescription =
				'Rejects compassionate people and the idea of compassion, prioritizes self-interest';
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
		case test >= traitBP.extremePositive.min:
			riskTakingDescription =
				'Fearless, actively seeks out high-risk endeavors, and respects risk-takers';
			riskTaking.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			riskTakingDescription =
				'Adventurous and willing to take calculated risks for even potential rewards';
			riskTaking.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			riskTakingDescription = 'Open to moderate risk-taking when the potential benefits justify it';
			riskTaking.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			riskTakingDescription = 'Takes a balanced approach to taking risk, avoids unnecessary danger';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			riskTakingDescription = 'Views risk unfavorably, prefers stability and predictability';
			riskTaking.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			riskTakingDescription = 'Disdains risk, sees it as reckless and unnecessary';
			riskTaking.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
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
		case test >= traitBP.extremePositive.min:
			loyaltyDescription = 'Has the highest regard for loyalty, considers it a paramount virtue';
			loyalty.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			loyaltyDescription = 'Greatly prizes loyalty, considers it a vital and honorable quality';
			loyalty.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			loyaltyDescription =
				'Values loyalty as an important quality, recognizes its significance in relationships and endeavors';
			loyalty.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			loyaltyDescription =
				"Doesn't value or devalue loyalty. Has a neutral stance and may approach loyalty on a case-by-case basis";
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			loyaltyDescription =
				'Views loyalty unfavorably, sees it as potentially restrictive or misguided';
			loyalty.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			loyaltyDescription = 'Disdains loyalty, considers it a weakness or a form of blind obedience';
			loyalty.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
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
		case test >= traitBP.extremePositive.min:
			independenceDescription =
				'Values complete independence and autonomy above everything else and will die for it';
			independence.isPositive = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			independenceDescription =
				'Highly independent but open to collaboration when it aligns with personal goals and will fight for it';
			independence.isPositive = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			independenceDescription =
				'Appreciates independence but recognizes the value of working with others';
			independence.isPositive = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			independenceDescription =
				'Maintains a balanced approach to independence, seeks it when necessary and values cooperation';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			independenceDescription =
				'Views excessive independence as potentially isolating or impractical';
			independence.isNegative = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			independenceDescription =
				'Disdains independence, sees it as a barrier to progress and collaboration';
			independence.isNegative = true;
			break;
		case test < traitBP.extremeNegative.max:
			independenceDescription =
				'Rejects the idea of independence entirely, values interdependence and collaboration';
			independence.isNegative = true;
			break;
		default:
			break;
	}

	return independenceDescription;
}

function describeGreedValue(greed) {
	const test = greed.value;
	let greedDescription = '';

	switch (true) {
		case test >= traitBP.extremePositive.min:
			greedDescription =
				'Possessed by insatiable greed, relentlessly pursues wealth and possessions at any cost';
			greed.isNegative = true;
			break;
		case test >= traitBP.midPositive.min && test <= traitBP.midPositive.max:
			greedDescription =
				'Ambitiously seeks accumulation of riches, willing to take calculated risks for vast rewards';
			greed.isNegative = true;
			break;
		case test >= traitBP.lowPositive.min && test <= traitBP.lowPositive.max:
			greedDescription =
				'Desires wealth and material gains, pursues opportunities for financial growth';
			greed.isNegative = true;
			break;
		case test >= traitBP.neutral.min && test <= traitBP.neutral.max:
			greedDescription = 'Maintains a balanced approach to wealth, seeks prosperity without excess';
			break;
		case test >= traitBP.lowNegative.min && test <= traitBP.lowNegative.max:
			greedDescription =
				'Views excess wealth unfavorably, prefers a more moderate and content lifestyle';
			greed.isPositive = true;
			break;
		case test >= traitBP.midNegative.min && test <= traitBP.midNegative.max:
			greedDescription =
				'Disdains greed, seeing it as a destructive force that corrupts individuals and societies';
			greed.isPositive = true;
			break;
		case test < traitBP.extremeNegative.max:
			greedDescription =
				'Rejects the idea of greed entirely, embracing a life of simplicity and detachment from material pursuits';
			greed.isPositive = true;
			break;
		default:
			break;
	}

	return greedDescription;
}
