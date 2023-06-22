// 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    // //brute force
    // //check every point in the matrix
    // for (let row in matrix) {
    //     for (let col in matrix[row]) {
    //         if (matrix[row][col] === target) {
    //             return true;
    //         }
    //     }
    // }
    // return false;

   let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0, bottom = rows - 1;

    // Perform binary search to find the target row
    while (top <= bottom) {
        let row = Math.floor((top + bottom) / 2);

        if (target > matrix[row][cols - 1]) {
            top = row + 1; // Target is in lower rows
        } else if (target < matrix[row][0]) {
            bottom = row - 1; // Target is in upper rows
        } else {
            break; // Target is found in the current row
        }
    }

    if (top > bottom) {
        return false; // Target row does not exist, target not found
    }

    let row = Math.floor((top + bottom) / 2);
    let left = 0, right = cols - 1;

    // Perform binary search within the target row
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target > matrix[row][mid]) {
            left = mid + 1; // Target is in the right half
        } else if (target < matrix[row][mid]) {
            right = mid - 1; // Target is in the left half
        } else {
            return true; // Target is found
        }
    }
    
    return false; // Target not found in the matrix
};

//Will be a array of integer arrays. always will be a valid array of arrays. integers will always be negative, 0 or 1. always valid!

//Return a boolean true if our target is in the array of sub arrays, false otherwise

//must be in o(log (m * n)) time

//Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true