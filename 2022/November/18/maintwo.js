// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    //get length of needle so we can use in our for loop to slice
    let needleLength = needle.length;

    //for loop
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i,i + needleLength) == needle) {
            return i
        }
    }

    return -1
};

//Will be 2 strings. needle and haystack. both will consist of only lowercase characters. always valid
//Return a number representing the index of the first occurence of needle in haystack, or -1 if not found
//E haystack = "sadbutsad", needle = "sad" => 0