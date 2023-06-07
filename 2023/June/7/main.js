// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let set = new Set(); // Create a new empty Set to keep track of visited positions on the board

    function terraform(row, col, index) {
        if (index === word.length) {
            return true; // If the index has reached the end of the word, return true (the word is found)
        }

        // Check for boundary conditions and mismatches in the word or visited positions
        if (
            board[row] === undefined ||                 // If the current row is out of bounds
            board[row][col] == undefined ||             // If the current column is out of bounds
            word[index] !== board[row][col] ||          // If the current character doesn't match the word
            set.has(row + "," + col)                    // If the current position has already been visited
        ) {
            return false; // Return false (the word cannot be formed)
        }

        set.add(row + "," + col); // Add the current position to the visited set

        // Recursively check the neighboring positions in all four directions
        let res =
            terraform(row + 1, col, index + 1) ||    // Check the position below
            terraform(row - 1, col, index + 1) ||    // Check the position above
            terraform(row, col + 1, index + 1) ||    // Check the position to the right
            terraform(row, col - 1, index + 1);      // Check the position to the left

        set.delete(row + "," + col); // Remove the current position from the visited set
        return res; // Return the result (true or false)
    }

    // Iterate over each position on the board
    for (let row in board) {
        for (let col in board[row]) {
            // Start the word formation check from the current position (row, col)
            if (terraform(parseInt(row), parseInt(col), 0)) {
                return true; // If the word can be formed, return true
            }
        }
    }

    return false; // If the word cannot be formed from any position, return false
};

//Will be 2 params. One will be an mxn grid of characters board. so an array of arrays. will contain characters

//other will be a string word. string word will always consist of lower and uppercase letters. always valid

//Return true if the word exissts in the grid

//the word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. same letter call may not be used more than once