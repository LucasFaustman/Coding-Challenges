// Companies
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    //if length is odd, return false
if (s.length % 2 !== 0) {
    return false;
}
//use a stack data structure
let stack = []

for (let i = 0; i < s.length; i++) {
    //if i is a closing bracket, check if stacks last char is an opening bracket of same type. if so pop
    if (s[i] === ')' && stack[stack.length - 1] === '(') {
        stack.pop()
    } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
        stack.pop()
    } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
        stack.pop()
    } else {
        //if not push our opening bracket
        stack.push(s[i])
    }
}
//return true if stack has no length

return !stack.length
};

//Will be a string containing only (), {}, []. will always be valid, always be just those strings
//Return a boolean representing if the paranthesis are valid or not
//E: '()'=> true
//'([])' => true
//'(}' => false