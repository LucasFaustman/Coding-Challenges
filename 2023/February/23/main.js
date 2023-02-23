// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.



/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    //create num variable
    let x = 0;
    //for loop. each time it runs, check if element is x++, ++x. if so, add one to num. if anything else, subtract from num

    // for (let string of operations) {
    //     if (string === "X++" || string === "++X") {
    //         x++
    //     } else {
    //         x--
    //     }
    // }
    // return x;

    //one liner

    return operations.reduce((acc,curr) => curr[1] === "+" ? ++acc : --acc,0 )

};

//Will be an array of strings.  array will always be array. elements inside array will always be "++X", "X++", "--X", or "X--"

//Return a number representing the final value of X after performing all the above operations

// /Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.