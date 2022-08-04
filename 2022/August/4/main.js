// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids){
    //I should first sort the array since it might be unsorted
    //then filter out duplicate integers using filter
    let newSortedFilteredArr = ids.sort((a,b) => a - b)
    .filter((element,index,arr) => arr.indexOf(element) === index)
  
    //then use a for loop.
    for (let i = 0; i < newSortedFilteredArr.length; i++) {
      //if the first element in the arr is not equal to 0, return 0
  if (newSortedFilteredArr[0] !== 0) {
      return 0
      }
      
  //     if newsortedfilteredArr[i] + 1 !== newSortedfilterarr[i+1], then return newsortedfiltered[i] + 1
      else if (newSortedFilteredArr[i] + 1 !== newSortedFilteredArr[i+1]) {
        console.log(newSortedFilteredArr[i])
        return newSortedFilteredArr[i] + 1
      }  
    
    }
  
  }
  
  // P: will be an array of integers. might be unsorted. might be duplicate integers. will be positive.
  // R: return the smallest unused integer in the array
  // E: [1,2,3,5] =>  4