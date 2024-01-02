export function addArticle(word) {
	// Get the first character of the word and convert it to lowercase
	const firstChar = word.charAt(0).toLowerCase();

	// Check if the first character is a vowel
	if (['a', 'e', 'i', 'o', 'u'].includes(firstChar)) {
		return 'an ' + word;
	} else {
		return 'a ' + word;
	}
}

export const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
