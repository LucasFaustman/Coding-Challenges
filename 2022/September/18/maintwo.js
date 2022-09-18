// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr){
    //I can create an object
      let newObj = {}
      
      //then a for loop
      for (let i = 0; i < arr.length; i++) {
        //if value exists, plus it by 1
        if (newObj[arr[i]]) {
          newObj[arr[i]] += 1
        } else
          //if not create new property and give is a value of 1
        newObj[arr[i]] = 1
      }
      //this is going to be a little complicated, but I need to return the highest value inside obj
      
      //also need to check if values are the same for highest, return the higer key value
      
      
      //use Obj.entries, when sorting, if the highest value of index 0 is equal to index 1, rhen sort and return highest value
      //if not, just return index 0
    return Object.entries(newObj).sort((a,b) => b[1] - a[1])[0][1] === Object.entries(newObj).sort((a,b) => b[1] - a[1])[1][1] ? 
            Number(Object.entries(newObj).sort((a,b) => b[0] - a[0])[0][0]) : Number(Object.entries(newObj).sort((a,b) => b[1] - a[1])[0][0])
    
    }
    
    //P: will be an array. will never be empty, seems like always valid. will be an array of numbers. unclear if always will be nums
    // R: return an integer representing the number that is most frequent in the array
    // E: [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] => 3 because 3 comes up 3 times, the most