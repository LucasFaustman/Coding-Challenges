// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.


/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function(n) {
//     //if n is not valid, return 1
//     if (!n) return 0
//     //we can use an array then a for loop
//     //create an array with 3 elements
//     let newArr = [0,1,1]
//     for (let i= 3; i <= n; i++) {
//         newArr.push(newArr[i-1] + newArr[i-2] + newArr[i-3]) 
//     }

//     return newArr[newArr.length - 1]
// };

var tribonacci = function(n, cache={}) {
    //memoized soluton
    //basecase, if n is 0, return 0, or if n is 1 or 2 return 1
    //also if there is a cached value, return it
        if (n == 0) {
            return 0
        } else if (n === 1 || n == 2) {
            return 1
        } else if(cache[n]) {
            return cache[n]
        }
        //cached value is tribonacci
        cache[n] = tribonacci(n-1, cache) + tribonacci(n-2, cache) + tribonacci(n-3, cache)
        
        return cache[n]
    };
    
    //Will be an integer. will always be a positive integer
    //return a number representing the nth tibonacci number
    //4 => 4 because 1 + 1 + 2 = 4