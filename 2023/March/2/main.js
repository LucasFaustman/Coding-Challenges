// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

/**
 * @param {string} s
 * @return {string}
 */
 var greatestLetter = function(s) {

    //potentially I can make a hashmap
    //hash of all occurences
    let hash = {};
    //create hashes of lowercase and uppercases
    let matchingHash = {};

    for (let i= 0; i < s.length; i++) {
        //each time this loops, check if hash contains our letter in the opposite case. if so, add to our matching hash obj
        if (s[i].toLowerCase() === s[i]) {
            if (hash[s[i].toUpperCase()] && !matchingHash[s[i]]) {
                matchingHash[s[i].toUpperCase()] = true;
            }
        }
        //same check for uppercase. check if we have a lowercase
        else if (s[i].toUpperCase() === s[i] && !matchingHash[s[i]]) {
            if (hash[s[i].toLowerCase()]) {
                matchingHash[s[i].toUpperCase()] = true;
            }
        }
        //if not found in our hash, add to hash
        if (!hash[s[i]]) {
            hash[s[i]] = true;
        }
    }
   
    //return our keys, sorted by opposite alphabetical order to get last valid letter, or an empty string if obj is empty
    return Object.keys(matchingHash).sort((a,b) => b.localeCompare(a))[0] || ''
    
};

//Will be a string of lowercase and uppercase english letters
//Return a letter in uppercase if letter appears as both a lowercase and uppercase letter. if no such letter exists, return empty string

//E

// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.