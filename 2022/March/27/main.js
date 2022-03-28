// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    // TODO
    
  //   set up a conditional to see how many names are inputted and return a template literal for each condition
    
    if (!names.length) {
      return 'no one likes this'
    } else if (names.length === 1) {
     return `${names[0]} likes this`
    } else if (names.length === 2) {
     return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    
  }
  
  // P: Parameter is an array of names. Array might be empty.
  // R: Returns a template literal with name likes this
  // e: 'Peter' => Peter Likes this
  // E: 'Peter','Dave' => Peter and Dave like this