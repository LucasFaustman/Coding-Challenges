// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    //hash
    //i = occurence

    let hash = {}

    for (let i= 0; i < num.length; i++) {
        hash[num[i]] = hash[num[i]] + 1 || 1
    }
    //loop through object
    //if our our occurence in object is equal to the number inside the string, return false
    for (let item in hash) {
        if (hash[item] != num[item]) {
            return false
        }
    }
    //return true if we get through the loop
    return true
};

//Will be a 0-indexed string number of length n consisting of digits. will always be a digit string, no funny business!
//Return a boolean representing true if for every index i, the digit i occurs num[i] times in num. otherwise return false
//E: "1210" -> true, because num[0] = 1, 0 occurs once. num[1] = 2, 1 appears twice. num[2] = 1, 2 appears once. num[3] is 0 because 3 doesnt occur