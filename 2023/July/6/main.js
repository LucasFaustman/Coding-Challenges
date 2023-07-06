// 763. Partition Labels

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    // //use hash map to find all occurences of each letter
    // let hash = {};
    // //res array
    // let res = [];

    // //left and right pointer
    //  let left = 0;
    //  let right = 0;
    // let currCharLastIdx;
    // //while loop
    // while (currCharLastIdx < s.length) {
    //     //expand the window somehow
    //     //find the last index of char
    //     currCharLastIdx = s.lastIndexOf(s[right])
    //     //are any letters from our current window included AFTER our last index?
    //     let currChars = new Set(s.slice(left, currCharLastIdx))
    //     for (let char of [...currChars]) {
    //         if (s.slice(currCharLastIdx).includes(char)) {
    //             currCharLastIdx = s.lastIndexOf(char)
    //         }
    //     }
    //     //if so, get the last index of the next char and do the same check^
    //     res.push(currCharLastIdx + left)
    //     left = currCharLastIdx
    //     right = currCharLastIdx = s.lastIndexOf(s[right])
    //     //once done, push our left + right to res array

    // }


    // return res;

    let lastIndexMap = new Map();
    let res = [];
    let start = 0;
    let end = 0;

    // Store the last occurrence index of each character
    for (let i = 0; i < s.length; i++) {
        lastIndexMap.set(s[i], i);
    }

    // Iterate through the string and update the end pointer
    // whenever we reach a character whose last occurrence is at or after the current end.
    for (let i = 0; i < s.length; i++) {
        const lastIndex = lastIndexMap.get(s[i]);
        end = Math.max(end, lastIndex);

        // If the current index is equal to the end, it means we have reached a partition boundary
        if (i === end) {
            res.push(end - start + 1);
            start = end + 1;
        }
    }

    return res;
};

//Will be a string.  always will have a valid length and always will be a valid string. always will consist of lowercase eng letters

//Return an array representing...

//the length of each partioned string, where we partition the string into as many parts as possible so that each letter appears at most in one part

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.