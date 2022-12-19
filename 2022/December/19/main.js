// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
    //array
    let hash = []
    //for loop

    for (let i =0; i < names.length; i++) {
        //each time loop runs, push our name and height
        hash.push([names[i], heights[i]])
    }
    //sort our array, then map so we only get the names
    
    return hash.sort((a,b)=>b[1]-a[1]).map((a)=>a[0]);
};

//Will be 2 params. One will be array of string representing names, other param is an array of numbers representing heights. heights will only consist of distinct positive integers and always will be valid. names will always be valid too
//Return an array sorted in descending order by peoples heights
//E: ["Mary","John","Emma"], [180,165,170] => ["Mary","Emma","John"]