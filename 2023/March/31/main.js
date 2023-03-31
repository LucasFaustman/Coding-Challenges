// 1217. Minimum Cost to Move Chips to The Same Position
// We have n chips, where the position of the ith chip is position[i].

// We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

// position[i] + 2 or position[i] - 2 with cost = 0.
// position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.

/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    

    //create an even and odd count
    let oddCount = 0, evenCount = 0;
    //for each number in arr, if number is even, add to our even count, else add to odd count
  position.forEach(num => num % 2 == 0 ? evenCount++ : oddCount++);
  //return the min cost between the 2
  return Math.min(oddCount, evenCount)


    
};

//An array of numbers. will always be a valid array of numbers.

//we have n number of chips, where the position of the ith chip is position[i]

//We need to return the min cost needed to move all chips to same position.

//In one step, where can change position of the ith chip from position[i]

//  position[i + 2] or -2 is a cost of 0

//position i+1 or -1 is a cost of 1

//Input: position = [1,2,3]
// Output: 1
// Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
// Second step: Move the chip at position 2 to position 1 with cost = 1.
// Total cost is 1.