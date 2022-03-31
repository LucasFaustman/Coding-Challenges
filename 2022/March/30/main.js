// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
    //your code here
  //   iterate through array. Filter only names with a length of 4
    
    return friends.filter(name => name.length === 4)
  }
  
  // P: array of strings. Each string is a name
  // R: An array of Only strings that have 4 letters in it
  // E: [Ryan,Logan,Kendall,Shiv] => [Ryan,Shiv]