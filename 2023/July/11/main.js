// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

function arraysSimilar(arr1, arr2) {
    //if arr1 and arr2 are different lengths, return false;
    if (arr1.length !== arr2.length) {
      return false;
    }
    //Since We just need to worry about occurences, we can probably utilize a hash map
    //no need to worry about order
    //we do worry about type though so we can use a map
    let arr1Map = new Map();
    
    for (let element of arr1) {
      if (arr1Map.has(element)) {
        arr1Map.set(element, arr1Map.get(element) + 1)
      } else {
        arr1Map.set(element, 1)
      }
    }
    //go through arr2. if theres a match in arr1map, decrease it
    for (let element of arr2) {
      if (arr1Map.has(element)) {
        //if our map has our element, get the occurence and see if its greater than 0, if so, decrease it. if not, return false
              const occurence = arr1Map.get(element)
        
              if (occurence > 0) {
              arr1Map.set(element, arr1Map.get(element) - 1)
              } else {
                return false;
              }
      } else { //we have no match, return false
        return false;
      }
    }
    
    
    return true;
    
  }
  
  
  //Will be 2 arrays. unclear if arrays will always be arrays. elements might contain any type
  
  //Return boolean true if the passed ins equences are similar
  //similar means they contain the same elements, and same number of occurences of elements
  
  //E
  
  // var arr1 = [1, 2, 2, 3, 4],
  //     arr2 = [2, 1, 2, 4, 3],
  //     arr3 = [1, 2, 3, 4],
  //     arr4 = [1, 2, 3, "4"]
  // arraysSimilar(arr1, arr2); // Should equal true
  // arraysSimilar(arr2, arr3); // Should equal false
  // arraysSimilar(arr3, arr4); // Should equal false