// 412. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Constraints:

// 1 <= n <= 104

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    //create and return result
    let res = [];

    //for loop
    for (let i= 1; i <= n; i++) {
        //3 and 5 first
        if (i % 5 === 0 && i % 3 === 0) {
            res.push('FizzBuzz')
        } else if (i % 3 === 0) {
            res.push('Fizz')
        } else if (i % 5 === 0) {
            res.push('Buzz')
        } else {
            res.push(`${i}`)
        }
    }

    return res;
};

//An integer. always a positive integer, no funny business

//Return a string array containing...

//answer[i] === 'fizzbuzz' if i divisible by 3 and 5

//answer[i] === 'fizz' if i is divisible by 3

//answer[i] === 'buzz' if i is divisible by 5

//else, i as a string if none of above conditions are true

//E

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]