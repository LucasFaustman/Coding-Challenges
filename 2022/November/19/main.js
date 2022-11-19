// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    //I can just use math.floor to round down, then Math.sqrt for square root
    return Math.floor(Math.sqrt(x))
};

//Will be a number. always will be valid, wont be negative. wont be float, always integer
//Return an integer representing the square root of param rounded down to nearest int
//8 => 2, 4 => 2