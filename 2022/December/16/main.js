// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    // //quadratic equation!
    // //declare arr
    // //if num inside nested arr is less than parent loop, add to count
    // //then push count to arr

    // let newArr = []

    // for(let i = 0; i < nums.length; i++) {
    //     let count = 0
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i !== j && nums[i] > nums[j]) {
    //             count++
    //         }
    //     }
    //     newArr.push(count)
    // }

    // return newArr

//sorted array

let newSortedArr = [...nums].sort((a,b) => a - b)

return nums.map(val => newSortedArr.indexOf(val))




};

//WIll be an array of nums. param will always be valid. always will be positive integers. never a string, symbol or something else

//Return an array where each value representings the number of element in original array that are smaller than it
//E: [8,1,2,2,3] => [4,0,1,1,3]