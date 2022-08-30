// Description
// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

function charFreq(message) {
    // First probably create an object for us to return at the end
      let newObj = {}
      //For loop that loops through message. if item is in object, add one to it. if not, add new item and assign value of 1 to it
      for (let i = 0; i < message.length; i++) {
        //if message[i] is in newobj, add one to it
       if (newObj[message[i]]) {
          newObj[message[i]]++
         //if no match, create new property
       } else
         newObj[message[i]] = 1
      }
      //then return obj at end
      
      return newObj
    }
    
    //P: Is a string. always will be a valid input
    // R: return an object with keys as the characters, then the value as how many times that character shows up in the string
    // E: ['aabbbcd'] => {'a': 2, 'b': 3, 'c':1,'d':1}