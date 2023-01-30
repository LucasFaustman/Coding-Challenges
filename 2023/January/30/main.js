// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    //brute force using includes method
    
    //declare empty array for answer and get our first word
    let answer = []
    let firstWord = words[0]
    //for loop going through our first word
    for (let char of firstWord) {
        //if every word in words includes char, add to answer array
        if (words.every(word => word.includes(char))) {
            answer.push(char)
            //delete letter from word after looping. this is to avoid issues with duplicates chars
            words = words.map(word => word.replace(char, ""))
    
        }
    }
    return answer
    };
    
    
    //Parameter will be a array of words. will always consist of lowercase english letters. always a valid array of strings with at least length of 1
    
    //Return an array of all characters that show up in all strings within words including duplicates!