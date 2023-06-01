// 567. Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    
    // for (let i= 0; i < s2.length; i++) {
    //     //check through slice and sort if its equal to s1.sort, if so, return true
    //     if (s2.slice(i, i+s1.length).split("").sort().join('-') === s1.split('').sort().join('-')) {
    //         return true;
    //     }
    // }
    // return false;

    //Sliding glass approach maybe

    //if our length of s2 < s1, we already know this is false!
    if (s2.length < s1.length) {
        return false;
    }

    let neededChars = {}; //store freq of required s1 strings
    for (let s of s1) {
        neededChars[s] = neededChars[s] + 1 || 1; 
    }

    let left = 0;
    let right = 0;
    let requiredLength = s1.length;

    while (right < s2.length) {
        if (neededChars[s2[right]] > 0)  {//if we find s2 character in s1, decrease required length
            requiredLength--;
        }
        //since we encountered a new char, s2[right], we decrease the count in needed char
        neededChars[s2[right]]--
        right++ //window increased by 1

        //now if our required length is 0 it means we found a match
        if (requiredLength === 0) {
            return true;
        }
        //if window is equal to s1length, then we need to remove left element out of window and add new to right
        if (right - left === s1.length) {
            	// if the left element we are removing was a required character then we increase requiredLength
			// because that element will no longer be the part of sliding window
            if (neededChars[s2[left]] >= 0) {
                requiredLength++
            }
            	// We will also increase the count of left element removed from window
			neededChars[s2[left]]++;

            // And finally we will decrease the window size by 1 from left i.e left++
                left++
        }
    }
    return false;

};
 

//2 params. both will be strings. always will consist of lowercase english letters. always individual strings. have always a valid length of at least 1

//Return true if one of s1's permutations is the sub string of s2, false if otherwise. permutation is like a substring of s1 in s2

//EExample 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false