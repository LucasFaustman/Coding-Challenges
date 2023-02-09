// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
    //probably should build an object holding department scores
    let departmentScores = {
      'accounts':1,
      'finance':2,
      'canteen':10,
      'regulation':3,
      'trading':6,
      'change':6,
      'IS':8,
      'retail':5,
      'cleaning':4,
      'pissing about':25
    }
    
    //then map through staff object to get values and assign to a variable
    
    let score = Object.values(staff).map(val => departmentScores[val]).reduce((acc,num) => acc + num,0)
    //then return based on score value
    if (score <= 80) {
      return 'kill me now'
    } else if(score < 100 && score >80) {
      return 'i can handle this'
    } else if (score >= 100) {
      return 'party time!!'
    }
  }
  
  
  //WIll be an object representing staff. staff names will be keys, department they work are values
  
  //Each department has different boredom score, as follows:
  
  // Each department has a different boredom assessment score, as follows:
  
  // accounts = 1
  // finance = 2
  // canteen = 10
  // regulation = 3
  // trading = 6
  // change = 6
  // IS = 8
  // retail = 5
  // cleaning = 4
  // pissing about = 25
  
  //Return a string depending on the cumulative score of the team as follows:
  
  // <=80: 'kill me now'
  // < 100 & > 80: 'i can handle this'
  // 100 or over: 'party time!!'
  
  // E:
  
  // {tim: 'change', jim: 'accounts',
  //   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  //   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  //   mr: 'finance' }), 'kill me now');