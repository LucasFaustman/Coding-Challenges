// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
   
    const map = {}; //map for storing key-strings
 
    for (let i= 0; i < 9; i++) { //outer loop for row
        for (let j = 0; j < 9; j++) { //inner loop for col
             if (board[i][j] === '.') continue //skip checking for empty space
 
             let num = board[i][j],
                 x = Math.floor(i / 3), //we can iterate through each box using idices
                 y = Math.floor(j / 3) //(i,j) divided by 3
 
                 let error = (map['r'+i+num]) || (map['c'+j+num]) || map['b'+x+y+num]
                 //check if any computer key strings already exist in our match object
 
                 if (error) {
                     return false; //if Error is true, board is invalid
                 }
 
                 map['r'+i+num] = 1; //add row, col, and box to map
                 map['c'+j+num] = 1;
                 map['b'+x+y+num] = 1;
        }
    }
    return true;
 };
 
 //Will be a an array of 9 subarrays, representing a sudoku board.
 
 //Board will be like a 9x9 sudoku board.
 
 //array of arrays might be partially filled, meaning we might need to check first
 
 //some cells might be filled, others empty. we just need to validate based on if they're filled
 
 
 //Return a boolean true if...
 
 //Each row must contain the digits 1-9 without repetition.
 // Each column must contain the digits 1-9 without repetition.
 // Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 
 //false otherwise
 
 
 //E
 
 // Input: board = 
 // [["5","3",".",".","7",".",".",".","."]
 // ,["6",".",".","1","9","5",".",".","."]
 // ,[".","9","8",".",".",".",".","6","."]
 // ,["8",".",".",".","6",".",".",".","3"]
 // ,["4",".",".","8",".","3",".",".","1"]
 // ,["7",".",".",".","2",".",".",".","6"]
 // ,[".","6",".",".",".",".","2","8","."]
 // ,[".",".",".","4","1","9",".",".","5"]
 // ,[".",".",".",".","8",".",".","7","9"]]
 // Output: true