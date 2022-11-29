// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    
    //hashmap

    let newObj = {}

    //then loop through s and add to obj

    for (let i = 0; i < s.length; i++) {
        newObj[indices[i]] = s[i]
    }
    
let newString = ""
    //another for loop which goes our object. add to new string
    for (let i = 0; i < indices.length; i++) {
        newString+= newObj[i]
    }

    return newString
};

//Will be a string and an array of integers. strings will only consist of lowercase letters. all integers are unique
//Return a new string where each character ends up in the position that is dictated in the indices array
//s = "codeleet", indices = [4,5,6,7,0,2,1,3] => leetcode because when sorted with new indices array, leet and code switch around!
//s = "lucas" ,indices=[0,1,3,4,2] => "luasc"