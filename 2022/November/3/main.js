// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.


SORT BY

Ad
Familiar with any of these? TypeScript, React, Java, Python, Kubernetes, Terraform, Snowflake? Join Coveo!
Ads via Carbon
Ad
Stay up to date on latest Codewars updates and developer insights.Follow Us on Twitter
LucasFaustman
function grabscrab(anagram, dictionary) {

  //declare new array
  
  let newArr = []
  
  //split, sort, and join our string

  let newAna = anagram.split('').sort().join('')
  //for loop
  for (let i = 0; i < dictionary.length;i++) {
    //if sorted i is equal to our sorted string, then push to newarr
    if (dictionary[i].split('').sort().join('') ==  newAna) {
      newArr.push(dictionary[i])
    }
  }
  
  return newArr
  
}

//2 parameters. One will be a string, other will be an array of strings containing words. both wil be valid
//Return a new array containing the strings that share the same exact letters as string, if not, return []
//grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] => ['sport','ports']