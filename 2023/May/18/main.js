// 2506. Count Pairs Of Similar Strings

// You are given a 0-indexed string array words.

// Two strings are similar if they consist of the same characters.

// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consist of only lowercase English letters.

/**
 * @param {string[]} words
 * @return {number}
 */
 var similarPairs = function(words) {
    //declare and arr of duplicate removed and sorted string, a count, and a hash
    let arrOfDupsAndSorted = [];
    let count = 0;
    let hash = {};
    //for loop through our words
    //for each word, get rid of duplicate chars, and then sort the char 
   for (let i= 0; i < words.length; i++) {
       let word = words[i]
       arrOfDupsAndSorted.push(Array.from(new Set(word.split(""))).sort().join(""))
   }    
    //for each word or element inside of our arr
    for (let element of arrOfDupsAndSorted) {
        if (hash[element]) { //if theres a match, add to our count, then iterate our hash match by 1
            count += hash[element]
            hash[element]++
        } else {
            hash[element] = 1;
        }
    }
    return count
};

//Will be an array of words. will always be a valid arr of words. words will only consist of lowercase english letters

//Return the number of pairs (words) in the ar that are similar

//words are similar if they both consist of the same characters, not necessarily the same count, but same chars

//Input: words = ["aba","aabb","abcd","bac","aabc"]
// Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'. 