// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    //create newarr
    let newArr = []
    //for loop, go up to halfway point and push our current plus current+midpoint
    for (let i= 0; i < n; i++) {
        newArr.push(nums[i], nums[i+n])
    }
    //return array
    return newArr
};

//Will be 2 params. first param will be an array of numbers. numbers will always be positive integers, no funny business. second param will always be a positive integer

//Return a new array where order is manipulated. element(index1), element(index(middlepoint)), element(index2), element(index(middlePoint+1))

//Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].