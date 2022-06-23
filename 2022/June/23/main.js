// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    // first step here is to sort the array, get the first value
      
    //   then I can split it into another array, then join with ***!
      
    return s.sort()[0].split('').join('***')
    }
    
    // P a array of a strings. will always be an array of strings
    // R: return a string representing the first value of the array with **** between each letter
    // E: ["lucas",'was','great','at','eating','apples'] =:> a***p****p****l****e****s