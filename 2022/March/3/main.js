
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    //   I can use length method here to check the length of the array. length needs to be 10
    //   You also need to return to your original destination somehow. Probably through the use of variables
    //   and adding values to variables
    //   can think of variables as x and y. x for w and e, y for n and s
     let xaxis = 0
     let yaxis = 0
    
     
     for (let i = 0; i < walk.length; i++) {
       if (walk[i] === 'n') {
         yaxis--
       } else if (walk[i] === 's') {
         yaxis++
       } else if (walk[i] === 'w') {
         xaxis++
       } else if (walk[i] === 'e') {
         xaxis--
       }
      
     }
         return walk.length === 10 && xaxis === 0 && yaxis === 0 
      
    }
    
    // P will be an array of single char strings representing directions to walk. Will always be a valid arr
    // R: true or false
    // 'n,e,w' => false since it's 3 minute walk