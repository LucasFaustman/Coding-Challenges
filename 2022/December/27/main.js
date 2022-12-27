// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).



/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    //declare hash
    let hash = {}
    //add all occurences of char to hash
    for (let i= 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1
    }
    //Use object.value method to get occurences then every method to see if every val is equal to eachother
    return Object.values(hash).every((value,index,arr) => value == arr[0])
};

//Will eb a string. string will only consist of lowercase english letters.always will be valid

//Return a boolean representing if all characters inside the string show up the same amount of occurences
//['a',"b","c"] => true
//["a","a","b" ,"c"] = false