// 1331. Rank Transform of an Array

// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    // //use a hash, which we can sort at the end to find rankings
    // let hash = {};

    // for (let n of arr) {
    //     hash[n] = hash[n] + 1 || 1;
    // }
    // //get our rankings by sorting the hash, then just getting the first entry or the value thats inside of our arr since the frequency doesnt matter as much
    // let rankings = Object.entries(hash).sort((a,b) => a[0] - b[0]).map(entry => entry[0])

    // //then map through arr, getting the index of our element and adding +1 to it
    // return arr.map(element => rankings.indexOf(element.toString()) +1)


    //create new array to hold rankings, also get rid of duplicates using new set
    let rankings = Array.from(new Set(arr)).sort((a,b) => a - b)
    //map indexofelement + 1 to arr and return
    return arr.map(element => rankings.indexOf(element) +1)
};

//Will be an array of ints.always will be a valid array. might be empty. ints might be positive or negative or 0

//Return an array with each element replaced by its rank

// The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.