// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    // //first get length / 2 number
    // let lengthDividedByTwo = candyType.length / 2

    // //remove duplicates with set
    // let removedDuplicateCandies = [...new Set(candyType)]

    // //if our removedDup candies length is greater than length divided by two of og array, return length divided by two. else return the length of the removed dupe array
    // return removedDuplicateCandies.length > lengthDividedByTwo ? lengthDividedByTwo : removedDuplicateCandies.length


    //one liner

    return Math.min(candyType.length / 2, new Set(candyType).size)
};

//Will be an array of integers. always will be an even number length wise. integers will always be valid but might be negative or positive

//Return the max number of different types of candies she can eat if she only eats n / 2 of them

// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.