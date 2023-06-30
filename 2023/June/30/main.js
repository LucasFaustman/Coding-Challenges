// 784. Letter Case Permutation

// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Constraints:

// 1 <= s.length <= 12
// s consists of lowercase English letters, uppercase English letters, and digits.

/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    //res array
    let res = [];
    dfs(0,"")
    return res;

    function dfs(index, string) {
        //base case

        if (s.length === index) {
            res.push(string)
            return;
        }
        //recursive case
        //each time, choose two options. we either can add our opposite case letter, or not
        
        if (s[index].match(/[a-z]/i)) { //if a letter
      const lowercaseChar = s[index].toLowerCase(); //get a lowercase and uppercase version of our char
      const uppercaseChar = s[index].toUpperCase();
        //call our dfs function, adding both cases of either a lowercase or uppercase char
      dfs(index + 1, string + lowercaseChar);
      dfs(index + 1, string + uppercaseChar);
    } else {
      dfs(index + 1, string + s[index]); //if not a letter, dfs as normal just adding our character to our string
    }
    }
};

//Will be a string. string will only consist of lowercase english letters, uppercase letters, and digits. always will have a length of at least 1 to 12

//Return an array of all possible strings we can create, by transformining every letter individually to be lowercase or uppercase to create a new string

//Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]