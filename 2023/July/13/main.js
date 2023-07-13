// There is an array of strings. All strings contains similar letters except one. Try to find it!

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {


    //use a hashmap in some sort of way
    let hash = {};
    
    //loop through each string of the array and add occurence to hash
    for (let string of arr) {
        for (let i= 0; i < string.length; i++) {
          hash[string[i].toLowerCase()] = hash[string[i].toLowerCase()] + 1 || 1;
        }
    }
    //get our character with the least amount of occurences, which will be the unique string
    let leastAmountOfOccurences = Object.entries(hash).sort((a,b) => a[1] - b[1])[0][0]
     //loop through each string of the array. if string has least amt of occurences, return it
    for (let string of arr) {
        if (string.toLowerCase().includes(leastAmountOfOccurences)) {
          return string;
        }
    }
    
  }
  
  
  //Will be an array of strings. unclear if always will be a valid array. array will always
  //contain more than 2 strings
  
  //Return the string that does not contain similar letters to all the other strings
  
  //strings may contain spaces. spaces not significant
  
  // findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
  // findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'