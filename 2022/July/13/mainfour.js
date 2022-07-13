// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

function tribonacci(signature,n){
    //   firstly add conditional. if n is 0 return []
      if (n === 0) {
        return []
    //     or if n is 1, return just signature 0
      } else if (n === 1) {
        return [signature[0]]
    //     if n is 2, return first two indexes of signature
      } else if (n === 2) {
        return [signature[0], signature[1]]
      }
      //We can keep the original array as is. we need the first 3 numbers in our returned array, so thats probably fine
    //   for loop. starts at 3, goes to n
    //   start loop at 3. end when i < n
      
      for (let i = 3; i < n; i++) {
    //     each time the loop runs, i want it to add previous 3 indexes and push to signature
        signature.push((signature[i - 2]) + (signature[i - 1]) + (signature[i -3]))
        
      }
    //   return signature
      return signature
      
    }
    
    // P: two params. one will be an array of numbers. numbers will be integers, array will always have 3 numbers. 
    // will be positive. if number is 0, return empty arr. n will always be positive integer
    // R: an array representing the tribonacci sequence of the signature going up to n
    // E: [1,1,1],10),[1,1,1,3,5,9,17,31,57,105]