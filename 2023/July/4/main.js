// 2269. Find the K-Beauty of a Number
// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.


/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
 var divisorSubstrings = function(num, k) {
    //simple loop here
    //first declare a kbeauty variable then return it somewhere
    let kBeauty = 0;
    //convert our num to a string
    num = num.toString();
    for (let i =0; i < num.length; i++) {
        //if our num sliced from i to i+k has a length of k and is a divisor of num, add to kbeauty
        if (num % num.slice(i, i+k) === 0 && num.slice(i, i+k).length === k) {
            kBeauty++
        }
    }

    return kBeauty;
    
};

//Will be 2 params. One will be a  number which is a number between 1 and infinity. will always be a pos integer

//K will be a positive integer as well

//Return the k-beauty of our num

//K beauty is defined as the number of substrings of num when it is read as a string that follows:

// It has a length of k.
// It is a divisor of num.



// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.



