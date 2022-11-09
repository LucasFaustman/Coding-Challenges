// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


/**
 * @param {string[]} strs
 * @return {string}
 */
 function longestCommonPrefix(strs) {
	// Return early on empty input
	if (!strs.length) return '';

	// Loop through the characters of the first string
	for (let i = 0; i < strs[0].length; i++) {
		// Loop through all strings
		for (let str of strs) {
			// Check if the character is present in the same position in all strings
			if (str[i] !== strs[0][i]) {
				// If not, return the first string, up to the character that was not found
				return str.slice(0, i);
			}
		}
	}

	// All characters were found, return the entire first string
	return strs[0];
}

//Will be an array of strings. will only be lowercase english letters. will always be valid
//Return a string of the longest common prefix among the array of strings. if none, return empty string
//E ["flower","flow","flight"] => "fl"
// ["array","number","lucas"] => ""