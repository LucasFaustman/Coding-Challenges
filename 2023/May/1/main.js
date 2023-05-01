// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    s = s.split('')
    //vowel obj
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
        'A': true,
        'E': true,
        'I':true,
        'O': true,
        'U': true,
    }

    //get an array
    //each time we encounter a vowel going from left to right, add to arr


    //then, go through s from left to right. if a vowel, then replace with the end of our arr

    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (vowels[s[i]]) {
            arr.push(s[i])
        }
    }
//right variable
let rightSide = arr.length - 1;

    for (let i = 0; i < s.length; i++) {
        if (vowels[s[i]]) {
            s[i] = arr[rightSide];
            rightSide--;
        }
    }
    return s.join('');
};


//Will be a string. always will contain printable asc11 characters

//return a string reverse only all the vowels in the string and return it
//can appear in either upper or lowercase

//E: 

// Input: s = "hello"
// Output: "holle"