// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    //declare matches, balance = 0
    let matches = 0;
	let balance = 0;
    //for loop
	for (let i = 0; i < s.length; i++) {
        //if char is R, reduce balance by 1
		if (s[i] === "R") {
			balance -= 1;
            //if char is L, add to balance
		} else if (s[i] === "L") {
			balance += 1;
		}
        //if our balance is equal to 0 at the end of it, add one to matches
		if (balance === 0) {
			matches += 1;
		}
	}

	return matches;
};

//Will be a string. String will always have at least a length of 2 and always valid. string will either contain 'L' or 'R'

//Return the max number of balanced strings we can obtain. Balanced string are those that have an eequal quantity of 'L' and 'R' characters.

//E:Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.