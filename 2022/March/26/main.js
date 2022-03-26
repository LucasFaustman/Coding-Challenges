// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation){

    //   set up a conditional to see if employed is true and vacation is false
      
      return employed && !vacation
    }
    
    // P: always a boolean, either true or false
    // R: Boolean(either true or false) Returns true if employed is true and vacation is false. Should return false otherwise
    // E: true,false => true. 
    // E: False,false: false
    // E: True,true, false