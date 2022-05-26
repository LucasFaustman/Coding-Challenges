// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    //   We can use the filtered array. Get the index of the element and see if it mod 2
      return arr.filter((element,index) => index % 2 === 0)
    }
    
    // P: arr. arr will always be an array
    // R: Return a filtered array. every second numbers. starts at 0
    // E: [Hello, my name is Lucas] => [Hello, name Lucas]