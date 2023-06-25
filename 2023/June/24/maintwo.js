// 2335. Minimum Amount of Time to Fill Cups

// You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

// You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

// Constraints:

// amount.length == 3
// 0 <= amount[i] <= 100

/**
 * @param {number[]} amount
 * @return {number}
 */
 var fillCups = function(amount) {
    //seconds variable
    let seconds = 0;


    //while loop - while hot cold and warm all have values > 0
    while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {
        //sort the arr and get the two highest values
        amount.sort((a,b) => b - a)
        //subtract one from both, and add to seconds
        amount[0]--
        amount[1]--
        seconds++
    }

    return seconds;
};

//Will be an array with a length of 3, where amount[0], amount[1], and amount[2] denote the number of cold,warm, and hot water cups i need to fill

//so our array will always be an array, and will have ints including 0 or positive

//Return the min number of seconds needed to fill all cups

//every second, we can fill up 2 cups of different types of water, or 1 cup of any type of water

//Input: amount = [1,4,2]
// Output: 4
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup and a warm cup.
// Second 2: Fill up a warm cup and a hot cup.
// Second 3: Fill up a warm cup and a hot cup.
// Second 4: Fill up a warm cup.
// It can be proven that 4 is the minimum number of seconds needed.