// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {

    //i can just use reverse method
    // s.reverse()

    //two pointer
    //left left and right. left is 0, right is length - 1
    let left = 0
    let right = s.length - 1
    
    
    while (left <= right) {
        //swap left and right values
        [s[left],s[right]] = [s[right],s[left]]
        //add to left and right
        left++
        right--
    }
    
    
    };
    
    
    //Will be an array of strings. always will be a printable ascii character. asuming all inputs are valid and no funny business!
    //modify input array representing the original array but reverse in o(1) time complexity
    //E: ["r","a","c","e"] => ["e","c","a","r"]