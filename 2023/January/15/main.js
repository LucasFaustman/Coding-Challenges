// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

function topThreeWords(text) {
  
    //I can use a hash map for this
    //split each space into array
    //then hash, and then sort based on value
    //then slice and return as array
    
    let hash = {}
    
    let splittedText = text.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``).split(' ')
    
    for (let i = 0; i < splittedText.length; i++) {
        hash[splittedText[i]] = hash[splittedText[i]] + 1 || 1
    }
  
    
    //filter out spaces. use Object.entries, filter, sort, map, then slice
    return Object.entries(hash).filter(entry => entry[0] !== '').sort((a,b) => b[1] - a[1]).map(entry => entry[0]).slice(0,3)
  } 
  
  //Will be a string of text with punctuation and line breaks.  will be a string of letters a to z
  //might contain special characters
  //might be lowercase or uppercase
  //text might not be valid or it might be an empty string
  //Return an array of the top 3 most occuring words in descending order of the number of occurences
  
  //E: ("In a village of La Mancha, the name of which I have no desire to call to
  // mind, there lived not long since one of those gentlemen that keep a lance
  // in the lance-rack, an old buckler, a lean hack, and a greyhound for
  // coursing. An olla of rather more beef than mutton, a salad on most
  // nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  // on Sundays, made away with three-quarters of his income.")
  // # => ["a", "of", "on"]