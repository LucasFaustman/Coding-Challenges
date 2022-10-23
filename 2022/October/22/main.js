// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss){

    //first double the happiness level of boss by 2
    meet[boss] = meet[boss] * 2
    //get total number of happiness
    let totalNumberOfHappy =  Object.values(meet).reduce((acc,num) => acc + num,0) 
    //ternary. if average is less than 5, return string, else return other string
    return totalNumberOfHappy / Object.values(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
  }
  
  //Will be 2 params. One meet, one boss. meet will be an array of key values representing happiness level/10. always will be valid
  //boss represents a property inside the object
  //return a string if the average of happiness is less than or equal to 5, a different string otherwise
  
  //outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');