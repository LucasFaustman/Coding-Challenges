// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {

    // //if first 2 elements are 0, or last two, minus n and replace first element with 0, or last with 0
    // if (flowerbed[0] === 0 && !flowerbed[1]) {
    //     flowerbed[0] = 1
    //     n--
    // } 
    
    // if (flowerbed[flowerbed.length - 1] === 0 && !flowerbed[flowerbed.length - 2]) {
    //     flowerbed[flowerbed.length - 1] = 1
    //     n--
    // }

    // //for loop
    // for (let i= 0 ; i < flowerbed.length; i++) {
    //     //if i-1 and i+1 is equal to 0 and i is 0, replace our flowerbed[i] with 1 and n--
    //     if (flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
    //         n--
    //         flowerbed[i] = 1;
    //     }
    // }
    // //if n ends up less than or equal to 0, then we have a right answer
    // return n <= 0;

    for (let i = 0; i < flowerbed.length && n > 0; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      n--;
    }
  }
  
  return n === 0
};

//Will be 2 params. One will be an integer array containing 0 and 1's. always will be valid integer array only containing 1 or 0

//0 represents empty, 1 represents not empty

//We also have an integer. always will be 0 or greater

//Return true if n new flowers can be planted in the flowerbed without violating the non adjacent flowers rule.

//false otherwise

//EExample 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false