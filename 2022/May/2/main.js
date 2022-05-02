// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    // need to loop num amount of times
    //   each time the loop goes, i want a string to go num sheep ... 
    //   concate the string 
      
      let sentence = ''
      
      for (let i = 1; i <= num; i++) {
        sentence += `${i} sheep...`
      }
      return sentence
    }