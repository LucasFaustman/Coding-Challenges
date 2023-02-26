// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    //I believe I can split with each space, map, reverse, then join, then join again

    // return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')

    //O(n) solution

    let result = '';
    let word = '';
    for (let char of s) {
        //check if char isnt a space
        if (char !== ' ') {
            //if not space, assign char to start of current word
            word = char + word;
            //if space, add to resullt
        } else {
            result += (word + char);
            word = ''
        }
    }
    //add last word to result
    return result += word
};

//Will be a string. String will always be valid, always will contain printable asc11 characters. does not contain any leading or trailing spaces. always will contain at least one word. words will be seperated by a single space

//Return the reverse order of characters in each word within a sentence while still perserving whitespace and initial word order

//E:Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"