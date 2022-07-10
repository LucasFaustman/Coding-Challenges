// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
    //   since param will always be positive, I can just use tostring(2) here. 
    //   I have to make sure a number is returned
      return Number(n.toString(2))
    }
    
    // P: is a number. will always be non negative and a number
    // R: return a number representing the binary of the integer
    // E: 1 => 1 5 => 101