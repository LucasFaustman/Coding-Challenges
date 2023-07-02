// 526. Beautiful Arrangement

// Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

// perm[i] is divisible by i.
// i is divisible by perm[i].
// Given an integer n, return the number of the beautiful arrangements that you can construct.

/**
 * @param {number} n
 * @return {number}
 */
 var countArrangement = function(n) {
    // //count and return the count
    // let count = 0;
    // //get an array of our n
    // let arr = [];

    // for (let i = 1; i <= n; i++) {
    //     arr.push(i)
    // }
    // //get all of our different permutes
    // let permutes = getPermutes(arr)
   
    // //permute function
    // function getPermutes (nums) {
    //      let res = [];

    // if (nums.length === 1) {
    //     return [nums.slice()]
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     let n = nums[i]

    //     let remainingNums = nums.filter(num => num !== n)

    //     let perms = getPermutes(remainingNums)

    //     for (let perm of perms) {
    //         perm.push(n)
    //         res.push(perm)
    //     }
    // }
    // return res;
    // }

    // //for loop through our permutes and see how many beautiful arrangements there arr

    // for (let i= 0; i < permutes.length; i++) {
    //     let isBeautiful = true;
    //     let permute = permutes[i]
    //     for (let j = 0; j < permute.length; j++) {
    //         if (permute[j] % (j+1) !== 0 && (j+1) % permute[j] !== 0) {
    //             isBeautiful = false;
    //             break;
    //         }
    //     }
    //     if (isBeautiful) {
    //         count++
    //     }
    // }
    // return count;

    let count = 0;
  let visited = new Array(n + 1).fill(false); // Track visited numbers

  function backtrack(position) {
    if (position > n) {
      count++; // Found a beautiful arrangement
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i] && (position % i === 0 || i % position === 0)) {
        visited[i] = true; // Mark the number as visited
        backtrack(position + 1); // Move to the next position
        visited[i] = false; // Unmark the number for other possibilities
      }
    }
  }

  backtrack(1); // Start backtracking from position 1
  return count; // Return the count of beautiful arrangements
};

//Will be a number. number will always be a positive integer between 1 and 15

//Return the number of beautiful arrangements that we can construct

//A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

// perm[i] is divisible by i.
// i is divisible by perm[i].

//Input: n = 2
// Output: 2
// Explanation: 
// The first beautiful arrangement is [1,2]:
//     - perm[1] = 1 is divisible by i = 1
//     - perm[2] = 2 is divisible by i = 2
// The second beautiful arrangement is [2,1]:
//     - perm[1] = 2 is divisible by i = 1
//     - i = 2 is divisible by perm[2] = 1