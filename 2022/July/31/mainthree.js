// Your task, is to create NxN multiplication table, of size provided in parameter.

multiplicationTable = function(size) {
    //   first create a new array
      let newArr = []
    //   then use a nested for loop! starts at 1, ends at size to begin
      for (let i = 1; i <= size; i++) {
        //declare a nested array that can be pushed to newarr
        let nestedArr = []
        //each time it runs, i want a nested for loop that pushes i * j+1
        for (let j = 1; j <= size; j++) {
          //push i * j which is the multipcation to nestedarr
          nestedArr.push(i*j)
        }
        //then push nested arr(which is a mult table) to our newarr
        newArr.push(nestedArr)
      }
      
      //return newarr
      
      return newArr
    }
    
    
    // P: will be an integer. unclear if always an integer. unclear if always positive or neg
    // R: return an array representing nested arrays with an nxn multiple table
    // E: 3 => [[1,2,3] , [2,4,6] , [3,6,9]]