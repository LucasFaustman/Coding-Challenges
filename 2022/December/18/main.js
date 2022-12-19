// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
    //create an alphabet string
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //when we are looping through key, get rid of any duplicates. we just want the first showing of the letter
    key = Array.from(new Set(key.split(' ').join('')))
    //then declare an object to hold key values and a result
   let hash = {}
   let result = ''
    //loop through alphabet string. assign our letter at key to our alphabetical letter
    for (let i= 0; i < alphabet.length; i++) {
        hash[key[i]] = alphabet[i]
    }

    //then loop through mesage and add to result. result + hash[message[i]], or empty space if invalid input

for (let i= 0; i < message.length; i++) {
    result += hash[message[i]] || " "
}
return result
};

//2 params. One represents a key, other is a message. both will be strings. only lowercase english letters and ' '. Key contains every letter in english alphabet at least once
//Return a new string representing the decoded message. Decoded message is obtained by taking first appearance of all 26 lowercase letters, then aligning the subitition witht he regular enlgihs alphabet
//E: 'the quick bwon fox jumps over the lazy dog' , 'vkbs bs t suepuv'
//=> 'this is a secret'. v in this case is equal to t, k equal to h, and so on
