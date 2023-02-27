// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    //split the string into array
    s = s.split('')
    //declare a new arr,index,left, and right
    let arr = [];
    let index = 0;
    let left = 0,
        right = 0;

    for (let i = 0; i < s.length; i++) {
        //if char is open paran, add one to left
        if (s[i] === '(') {
            left++
            //if closed, add one to right
        } if (s[i] === ')') {
            right++
        }
        //if our left and right is balanced, this means we have a valid paran. push to add, slicing from our index to i + 1. then reassign index to i + 1
        if (left === right) {
            arr.push(s.slice(index,i+1))
            index = i + 1;
        }
    }
    //get rid of first and last paran in each paran
for (let i in arr) {
    arr[i].pop();
    arr[i].shift();
    
}
//join arr together and replace all weird characters with empty space
    return arr.join('').replace(/,/g,'')
};

//Will be a string. always will be a valid string. s[i] will either be '(' or ')'

//Return a new string after removing the outermost parenthesis of every primitive string in the primitive decomposition of s

//Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".