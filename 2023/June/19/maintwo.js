// 695. Max Area of Island

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    //2 for in loops to get point
    //variable to hold max area
    let maxArea = 0;
    for (let row in grid) {
        for (let col in grid[row]) {
            //if our point is 1
            if (grid[row][col] === 1)  {
                //get our maxarea from our teraform function
                let res = teraform(parseInt(row), parseInt(col), grid)
                maxArea = Math.max(res, maxArea) //reassign maxarea if necessary
            }
               
        }
    }

    return maxArea;
};

//teraform function

function teraform(row,col,grid) {
    //basecase
    if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] !== 1) {
        return 0;
    }
    //reassign our point to 0
    grid[row][col] = 0;
    //declare a count, go through all possibilites, adding to our count along the way
   let count = 1;
    count += teraform(row+1, col, grid);
    count += teraform(row-1, col, grid);
    count += teraform(row, col+1, grid);
    count += teraform(row, col-1, grid);
    //return our count so that the lower teraform calls can be added to our count
    return count;
}

//Will be a 2dimensional grid. always will be a valid grid. grid[i][j] will either be 0 or 1

//Return the max area of an island. an island is the number of cells with a value of 1 in the island

//if no island, return 0

