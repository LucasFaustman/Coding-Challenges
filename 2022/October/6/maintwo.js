// It's time to create an autocomplete function! Yay!

// The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

// Example:

// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
// For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

// For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

// Important note:

// Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".

// (Thanks to wthit56 for the suggestion!)

function autocomplete(input, dictionary){  
    //get length of input
    
    let inputLength = input.length
    
    //we have to get rid of symbols and numbers in inptu. we can do this by filtering
    let newInput = input.split('').filter(element => element.toLowerCase() !== element.toUpperCase()).join('')
    
  
    //return array with filter. filter out elements when sliced by input length, has to equal input
    //then slice at end again to get only length of 5
    //also make sure to make initial filter.tolowercase because casing doesnt matter when calculating, but does matter in returned array
    return dictionary.filter(element => element.slice(0, newInput.length).toLowerCase() === newInput.toLowerCase() ).slice(0,5)
    
  }
  
  //Will take in a string and a dictionary array. dictionary will always be valid array of strings. might be upper or lowercase. might include symbols, letters, numbers.
  //Return an array of strings that match the input to the start of the word inside dictionary. only return first 5. not case sensitive
  //E: autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']