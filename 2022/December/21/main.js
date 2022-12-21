// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    //hashmap

    //loop through allowed and add to hashmap

    let hash = {}
    let count = 0
    for (let i =0; i < allowed.length; i++) {
        hash[allowed[i]] = true;
    }

    //quadratic

    for (let i = 0; i < words.length; i++) {
        let word = words[i]

        for (let j = 0; j < words.length; j++) {
            let char = word[j]
            if (!hash[char]) {
                break
            }
            else if (j === word.length - 1) {
                count++
            }
        }
    }
    return count
};

//2 parameters. One a string of distinct characters and an array of strings.  both will only contain lwoercase english letters. characters in allowed wont have duplicates. both params wont have any funny business

//Return  a number representing the number of consistent strings in our words array. a string is consistent if all characters in the string appear in allowed

//allowed = "ab", words = ["ad","bd","aaab","baa","badab"] => 2
//because aaab and baa