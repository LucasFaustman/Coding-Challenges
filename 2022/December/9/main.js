// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

function QuestionsMarks(str) { 

    //response is default false
    let res = false;
    
    //for loop
    //nested for loop.
    //in for loop, see if numbers add up to 10
    //then see if there are 3 ?'s between the numbers
    
    for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j < str.length; j++) {
        //if character converted to num + character converted to num is 10, set res to true
        if (Number(str[i]) + Number(str[j]) === 10) {
          res = true;
          //but, if there arent three ?'s between, assign back to false
          if (str.slice(i,j).split('?').length - 1 < 3) {
            res = false;
          }
        }
      }
    }
    //return res
    
    return res
    }
       
    // keep this function call here 
    console.log(QuestionsMarks(readline()));
    
    
    
    //Will be a string parameter. will contain digit numbers, letters, and question markks. unclear if always valid. 
    //will it always be valid? unclear
    //Return a boolean representing true if there are exactly 3 question marks between every pair of 2 numbers
    //to exactly add up to 10, false otherwise.
    //"aa6?9" => false, vecause there are no three ?'s to begin with
    //"acc?7??sss?3rr1??????5" => true, because