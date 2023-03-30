// 1304. Find N Unique Integers Sum up to Zero
// Given an integer n, return any array containing n unique integers such that they add up to 0.

/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    //get mid point of our n, then create an array
      let num = Math.floor(n/2); 
      let res = [];
  //for loop. we push our positive i to our array, and -i
    for(let i=1; i <= num; i++){
        res.push(i,-i)
       } 
       //if array is odd, push a 0
  
    if(n%2!==0){
      res.push(0)
    }
    
    return res 
  };
  
  
  //Will be an integer. always will be an int. never a string or anything else
  
  //Return an array containing n UNIQUE integers such that they add up to 0
  
  //Input: n = 5
  // Output: [-7,-1,1,3,4]
  // Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].