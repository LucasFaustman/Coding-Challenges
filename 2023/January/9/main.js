// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n, cache={}) {

    // //if n is 1, return 1
    // if (n === 1) return 1
    // //bottom up approach
    // //create array first 3 elements
    // let arr = [0,1,2]

    // //for loopp

    // for (let i= 3;i <= n; i++) {
    //     arr.push(arr[i-1] + arr[i-2])
    // }

    // return arr[arr.length - 1]

    //memoized solution
    //basecase is under or equal to 2
    if (n <=2) {
        return n
    } else if (cache[n]) {
        return cache[n]
    }
    //our cached value is equal to n-2 + n-1
    cache[n] = climbStairs(n-1,cache) + climbStairs(n-2, cache)


    return cache[n]


};

//Will be a number. always will be a positive integer, never anything else!
//Return a number representing the amount of distinct ways you could climb to the top. you can either climb 1 or 2 steos
//2 => 2 since you could either go 2 steps 1 time, or 1 step then 1 step