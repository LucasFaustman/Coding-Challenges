// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.



/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    //I believe I can map through and split each sentence

    let splittedSentences = sentences.map(sentence => sentence.split(' '))

    //count

    let count = 0
    //for loop
    for (let i = 0; i < splittedSentences.length; i++) {
        if (splittedSentences[i].length > count) {
            count = splittedSentences[i].length
        }
    }

    return count
};


//Will be an array of sentences. always will consist of lowercase english letters and spaces
//Return a number representing the array with the most amount of words
//["alice and bob love leetcode", "i think so too", "this is great thanks very much"] => 6 because last sentence has most words
