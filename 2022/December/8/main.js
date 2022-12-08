// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxCharacter(string) {
    let hash = {}
    //for loop through string. each time it loops, check if character is present. if so, add one. if not, create new property and assign 1 to it
  
    for (let i = 0; i < string.length; i++) {
        if (hash[string[i]]) {
          hash[string[i]]++
        } else {
          hash[string[i]] = 1
        }
    }
  
    //return object.keys, then use reduce method to find biggest value
    return Object.keys(hash).reduce((prev,curr) => (hash[prev] > hash[curr]) ? prev : curr);
  
  }
  
  console.log(maxCharacter('Hello World!'), 'l')
  console.log(maxCharacter('Lucass'), 's')
  
  
  //String of characters. String might be numbers, symbols, text. upper or lowercase. always valid solution
  //Return the character that appears the most often.
  
  //"Hello World!" => l because l appears 3 times
  //"Lucass" => "s"