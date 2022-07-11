// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  
    //   first create a new array
      let newArr = []
    //   then create a for loop
      for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i+1]) {
          newArr.push(iterable[i])
        }
      }
    //   return newarr
      return newArr
    }
    
    // P: will be a string or an array.
    // R: return an array with any elements next to the same value next to eachother
    // E:  [1,2,2,3,3] => [1,2,3] -> 'AAABBCC' => ['A','B','C']