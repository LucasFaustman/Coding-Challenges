// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits..

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    // I can use the filter method to only get the element where the initial index does not equal the index of the elemtn
    //   and return the length, which represents the num of duplicates
      
    
      
      const duplicatedLetters = text.toLowerCase().split('').filter((element,index) => text.indexOf(element) !== index)
      //   filter method gives all the instances. I need to shorten it to give me just one instance. for example, in filtered
    //   arr I got i i i i i ,s => which I need to just be i,s
    //   I can just filter again and return
      return duplicatedLetters.filter((element,index) => duplicatedLetters.indexOf(element) === index).length
    }
    
    // P Will be a string. Might not always be a full string though
    // R: return number representing the amount of duplicates in the string
    // E; aabbc => 2