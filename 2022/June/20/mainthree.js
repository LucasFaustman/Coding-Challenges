// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    //   I can utilize array method here. I first need to split string into array, then grab the first value of element, add to end
    //   , then add ay to the end of the element
    //   I also need to add some sort of conditional for puncutation
      
    // I should declare an object full of puncutation
      let punctuations = [".", ",", ":", "!", "?"];
    //   here is my map method which I apply to a variable. this will slice each word, and put the first letter
    // at the end of each word
     const newStr = str.split(' ').map(element => 
                        `${element.slice(1)}${element.charAt(0)}`)
    //  then use a conditional to see if there is punctuation. if so, just give the element. if not, add ay to end
      return newStr.map(element => punctuations.includes(element) ? element : `${element}ay`).join(' ') 
    
    }
    
    // P: is a string, will always be a string!
    // R: Return the same string but the first letter of each word will be moved to the end, then ay added as well
    // E: 'My name is Lucas' => 'ymay amenay ucaslay'