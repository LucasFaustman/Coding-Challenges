// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

function meeting(x){

    //for loop
    for (let i = 0; i < x.length; i++) {
      //if finds an O, return the index
      if (x[i] === 'O') {
        return i
      } 
    }
    //if not found, return string
    return 'None available!'
  }
  
  
  //Will be an array of strings representing 'X' or "O". no funny business
  //Return the index of which the first O is present. 'none available!' otherwise
  
  // ['X', 'O', 'X']), 1);