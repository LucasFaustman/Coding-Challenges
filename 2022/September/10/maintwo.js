// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

//write your code here 
//I can use the foreach method

questions.forEach(function(obj) {
    obj.usersAnswer = null
  })
  
  
  
  
  
  //P: will be an array of objects. always will be an array of objs it seems
  // R: return an array with a new property added to each object inside the array
  // // Evar questions = [{
  //     question: "What's the currency of the USA?",
  //     choices: ["US dollar", "Ruble", "Horses", "Gold"],
  //     corAnswer: 0
  // }]
  
  // => 
  
  // var questions = [{
  //     question: "What's the currency of the USA?",
  //     choices: ["US dollar", "Ruble", "Horses", "Gold"],
  //     corAnswer: 0,
  //     usersAnswer: null
  // }