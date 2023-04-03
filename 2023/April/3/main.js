// 1394. Find Lucky Integer in an Array
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {

    //hash map to hold freqs

    let hash = {};

    for (let num of arr) {  
        hash[num] = hash[num] + 1 || 1
    }

    //sort obj in acending order

   let sortedObj = Object.entries(hash).sort((a,b) => Number(b[0]) - Number(a[0]))

   //for of loop in sortedObj, check if first entry is equal to second
    
    for(let entry of sortedObj) {
        if (entry[0] == entry[1]) {
            return entry[1]
        }
    }


    
    //if no lucky num, return -1
    return -1
};


//Param will be an array of integers. always will be an array. always will contain valid positive integers

//Return an integer representing the lucky integer. lucky integerhas a frequency equal to its value

//if multipe lucky number, return the largest of them

//if no lucky num, return -1

//Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.