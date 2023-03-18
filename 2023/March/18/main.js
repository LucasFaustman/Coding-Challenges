// 200. Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    //declare a islandcount variable
    let islandCount = 0;

    for (let rowIndex in grid) {
        for (let colIndex in grid[rowIndex]) {
            if (grid[rowIndex][colIndex] === '1') {
                islandCount++
                //then, create a helper function to check if cells next to our current is still apart of our island
                teraform(parseInt(rowIndex),parseInt(colIndex), grid)
            }
        }
    }

    return islandCount;
};

 //helper function

 //teraform

 let teraform = (rowIdx, colIdx, grid) => {
     //base cases
     if (grid[rowIdx] === undefined || grid[rowIdx][colIdx] === undefined || grid[rowIdx][colIdx] === '0' ) {
         return;
     }
    //resassign current cell to 0
     grid[rowIdx][colIdx] = '0'
    //check horozontally and vertically for land recursively
     teraform(rowIdx,colIdx + 1,grid)
     teraform(rowIdx,colIdx - 1,grid)
     teraform(rowIdx + 1,colIdx,grid)
     teraform(rowIdx - 1,colIdx,grid)
 }

//Will be a grid which represents a map of string 1(land) and string 0(water)

//Return an integer representing the number of islands.

//an island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3