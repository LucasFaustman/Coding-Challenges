// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.


function isOddHeavy(array){
    //.sort and get the smallest odd number, then for loop up. if theres an even number, return false
    
    let sortedArr = array.sort((a,b) => a - b)
    
    let smallestOdd = Infinity;
    
    //for loop
    for (let i= 0; i < sortedArr.length; i++) {
      if (sortedArr[i] % 2 !== 0 && sortedArr[i] < smallestOdd) {
        smallestOdd = sortedArr[i]
      }
      
      if (sortedArr[i] % 2 === 0 && sortedArr[i] > smallestOdd) {
        return false;
      }
    }
    return smallestOdd === Infinity ? false: true;
  }
  
  //Will be an array. unclear if array will always be array. seems like it might be empty.
  //seems like it will only contain numbers, could be pos, negative, or 0
  
  //Return boolean true if the array is odd heavy
  
  //an array is odd heavy if it contains at leats one odd element and every element whose value is
  //odd is greater than every even values element
  
  // Array [11,4,9,2,8] is odd-heavy,
  // because its odd elements [11,9] are greater than all the even elements [4,2,8]
  
  // Array [11,4,9,2,3,10] is not odd-heavy,
  // because one of its even elements (10 from [4,2,10]) is greater than two of
  // its odd elements (9 and 3 from [11,9,3])
  
  // Array [] is not odd-heavy,
  // because it does not contain any odd numbers
  
  // Array [3] is odd-heavy,
  // because it does not contain any even numbers.
