// 2259. Remove Digit From Number to Maximize Result

// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

// Constraints:

// 2 <= number.length <= 100
// number consists of digits from '1' to '9'.
// digit is a digit from '1' to '9'.
// digit occurs at least once in number.

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
 var removeDigit = function(number, digit) {
    //for loop
    let maxNumber = '';

    for (let i= 0; i < number.length; i++) {
        //if number is equal to our digit
        if (number[i] === digit) {
            //then get rid of the number in the string using two slices
           let newNum = number.slice(0,i) + number.slice(i+1)
            //check if greater than maxnumber
            //I cant use math.max because it returns a number and if the input is too big it will get all weird
           if (newNum > maxNumber) {
               maxNumber = newNum;
           }
        }
    }
    return maxNumber
};

//WIll be 2 params. One will be a string numbers representing a positive integer. string will always consit of digits from string 1 to string 9. always will have a valid length of at least 2

//Other param will be  a digit from string 1 to string 9. always will be a string

//digit will always occur at least once in our number

//Return the resulting string after removing exactly one occurence of digit from number such that the value of the res string in decimal form is maximized

// Example 1:

// Input: number = "123", digit = "3"
// Output: "12"
// Explanation: There is only one '3' in "123". After removing '3', the result is "12".
// Example 2:

// Input: number = "1231", digit = "1"
// Output: "231"
// Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
// Since 231 > 123, we return "231".