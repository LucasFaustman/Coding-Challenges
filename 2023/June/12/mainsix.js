// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

function Xbonacci(signature,n){
    //get our signaturedlength
    let signatureLength = signature.length
    let res = signature; //start a new res
      //for loop from 0, to n
    for (let i= 0; i <= n ; i++) { //
      res.push(res.slice(i, i + signatureLength).reduce((acc,num) => acc + num,0))
  }
    return res.slice(0, n); //slice from 0 to n to get the desired length of fib
  }
  
  //What am I looking at lol
  
  //Will be 2 params. One will be a signature of x elements. So first param will be an array of numbers. second param will be an integer
  //representing the number of elements we need to return
  
  //Return the first n elements of the sequence starting with or original array
  // E
  // bonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
  // xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
  // xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
  // xbonacci {1,1} produces the Fibonacci sequence