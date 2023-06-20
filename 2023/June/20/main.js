// 2078. Two Furthest Houses With Different Colors

// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

// Constraints:

// n == colors.length
// 2 <= n <= 100
// 0 <= colors[i] <= 100
// Test data are generated such that at least two houses have different colors.

/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {

    // //brute force
    // let maxDistance = 0;

    // for (let i= 0; i < colors.length; i++) {
    //     for (let j = i; j < colors.length; j++) {
    //         if (colors[i] !== colors[j]) {
    //             maxDistance = Math.max(maxDistance, Math.abs(i - j))
    //         }
    //     }
    // }

    // return maxDistance;

    let n = colors.length; // Get the length of the colors array

    let max = 0; // Initialize the maximum distance as 0
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[0]) { // Check if the current color is different from the first color
            max = Math.max(max, i); // Update the maximum distance if necessary
        }
        if (colors[i] !== colors[n - 1]) { // Check if the current color is different from the last color
            max = Math.max(max, n - 1 - i); // Update the maximum distance if necessary
        }
    }
    return max; // Return the maximum distance
    
};


    

//Will be an array of houeses, where colors[i] represents the color of the ith house. will always be an array of numbers. numbers will be 0 or positive integers. at least two houses have different colours

//Return the maximum distance between two houses with different colours

//EInput: colors = [1,1,1,6,1,1,1]
// Output: 3
// Explanation: In the above image, color 1 is blue, and color 6 is red.
// The furthest two houses with different colors are house 0 and house 3.
// House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
// Note that houses 3 and 6 can also produce the optimal answer.