// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

function spongeMeme(sentence) {
    //we can probably use the map method here
    //index if mod 2 === 0, uppercase else lower
    
    return sentence.split('').map((letter,index) => index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
    
    
  }
  
  //Will be a string. unclear if always will be a string, number, or symbol. unclear if always valid
  //Return a new string that concerts input into mocking spongebob format. first letter uppercase, next lower, and so on
  //E: "stop Making spongebob Memes!"
  //=> "StOp mAkInG SpOnGeBoB MeMeS!"