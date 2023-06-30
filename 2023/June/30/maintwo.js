// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    // //res variable and return at the end
    // let res = [];
    // let set = new Set()
    // dfs("")
    //     res.sort(); // Sort the array in lexicographic order

    // return res;

    // //dfs function
    // function dfs(string) {
    //     if (set.has(string)) {
    //         return;
    //     }
    //     set.add(string)
    //     if (string.length === n * 2) {
    //         res.push(string)
    //         return;
    //     }
    //     //bury next paranthesis in our current paranthesis, or add to it
    //     dfs(`(${string})`)
        
        
    //     dfs(string + '()')

    //     dfs('()' + string)

        
    // }
    

    //New solution

  let res = [];
    dfs("", 0, 0); // Start the recursive DFS with an empty string, and initial open and close counts as 0
    res.sort(); // Sort the array in lexicographic order
    return res;

    function dfs(string, open, close) {
        if (string.length === n * 2) {
            res.push(string); // If the length of the string reaches 2n (total parentheses count), add it to the result
            return;
        }

        if (open < n) {
            dfs(string + '(', open + 1, close); // If the number of opening parentheses (open) is less than n, add an opening parenthesis to the string and recursively call dfs with updated counts
        }

        if (close < open) {
            dfs(string + ')', open, close + 1); // If the number of closing parentheses (close) is less than the number of opening parentheses (open), add a closing parenthesis to the string and recursively call dfs with updated counts
        }
    }
};

//Will be a number. this number will always be an integer between 1 and 8

//Return all combinations of a well formed paranthesis

//will be returned as an array

//Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]