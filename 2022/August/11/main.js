// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

function sayHello( name, city, state ) {
    //first declare a name variable which is equal to name.join(' ')
    let nameInput = name.join(' ')
    
    //then return a template literal
    
    return `Hello, ${nameInput}! Welcome to ${city}, ${state}!`
  }
  
  //P: Will be 3 strings. Unclear if always will be strings. the name param will be an array of strings that will contain one or more
  // values with a space between
  // R: return a string that says "Hello, (name)! Welcome to (city) (state)"
  //E: ['Lucas', 'Faustman'],'Vancouver','B.C' => 'Hello Lucas Faustman! Welcome to Vancouver, B.C.'