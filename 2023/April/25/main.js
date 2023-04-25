// 1431. Kids With the Greatest Number of Candies
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    //get the max number of candies first from arr
    let maxCandy = Math.max(...candies)
    //res
    let res = [];
    //for loop
    for (let i= 0; i < candies.length; i++) {
        let candyCount = candies[i];
        if ((candyCount + extraCandies) >= maxCandy) {
            res.push(true)
        } else {
            res.push(false)
        }
    }

    return res;
};

//Will be 2 parameters. one will be an inetger array representing kids with candy. each i represents a kid, and num[i] represents the number of candy the have. second param is an integer representing the number of extra candies we have.

//both params always wil be valid, integers will always be positive

//Return an array representing result[i] is true after giving the ith kid all the extra candies, they will have the greatest num of candy among all kids. false otherwise

//multiple kids can have the greatest number

//E

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.