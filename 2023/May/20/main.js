// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    //have a hash with a stored sorted version of the string and the index we are pushing to
    let hash = {};

    //create a new array
    let newArr = [];
    //an indexCount
    let idxCount = 1;
    //for loop
    for (let i = 0; i < strs.length; i++) {
        //get a sorted version of strs[i] and unsorted
        let unsortedWord = strs[i]
        let sortedWord = strs[i].split('').sort().join('')
        //if we have a match in our hash already
        if (hash[sortedWord]) {
            newArr[hash[sortedWord] - 1].push(unsortedWord) //push to the prestablished induex
        } else { //else, add the sorted word and idx to the hash, push our new subarr to the array, and iterate the idx by 1
            hash[sortedWord] = idxCount;
            newArr.push([unsortedWord])
             idxCount++
        }
    }
    return newArr;
};

//Will be an array of strings. always will be an array of strings and valid. strings will only consist of lowercase eng letters

//Return a new array of subarrays where each anagram is grouped together in its own sub arr

//an anagram is a word or phrase formed by rearranging the letters of a different word of phrase

//Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]