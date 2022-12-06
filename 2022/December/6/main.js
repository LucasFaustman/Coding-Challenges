// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    //use a hash in order to store our jewel values
    let hash = {}
    let count = 0

    for (let i =0; i < jewels.length; i++) {
        hash[jewels[i]] = true;
    }

    //for loop around stones. if theres a match, add one to our count
    for (let i = 0; i < stones.length; i++) {
        if (hash[stones[i]]) {
            count++
        }
    }
    //then return our count
    return count
};

//2 strings. first string represents jewels, second stones. only english letters. string will never be empty or invalid. unique characters in jewel array
//Return an integer representing the amount of jewels(english letters) in our jewels string that is also found in stones string
//E: "aA", "aaabbbb" => 3 because we have 3 a's
//E: "A", "bbb" => 0 because no matches
//E: "a", "AAA" => 0 because uppercase matters!