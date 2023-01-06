// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.

// Return true if and only if Alice wins the game, assuming both players play optimally.

/**
 * @param {number} n
 * @return {boolean}
 */
 var divisorGame = function(n) {
     //if alice starts on odd number of moves, it seems like she loses everytime, if even alice wins. so we can create a simple mod statement returning true if our param % 2 is 0
    return n%2 === 0 
};

//Will be an integer. always will be an integer, never a float. never will be negative, always positive.
//Return a boolean representing true if alice wins the game. we pass our param which represents a number into the game. each players turn, the player makes a move where they choose a number beteween 0 and n, and n has to be divisible by number chosen.
//we replace number n on the param with n - player chosen number.

//E: 2 => true, because Alice chooses 1, bob has no more moves
//E: 3 => false, because alice chooses 1, bob chooses 1, alice has no more moves