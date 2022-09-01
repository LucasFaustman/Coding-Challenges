// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true


function containAllRots(string, arr) {
    //if string is '', return string
    
    if (string === "") {
      return true
    }
  
    //repeat string twice to get all rotations
   let newStr =  string.repeat(2).split('')
   //half convert array of letters into rotations. slice each element and get element ahead at the string.length
   let halfRotatedArr = newStr.map((element,index) => newStr.slice(index,index+string.length).join(''))
   //then filter out elements that dont have the same length
     .filter(element => element.length === string.length)
   //get rid of duplicates
    let rotatedArr = halfRotatedArr.filter((element,index) => halfRotatedArr.indexOf(element) === index)
  // for loop. goes through rotatedArr
   for (let i = 0; i < rotatedArr.length;i++) {
     //if arr doesnt include rotatedarr, return false
     if (!arr.includes(rotatedArr[i]))  {
         return false
         }
         }
    //if we get through the loop, function must be true
    return true
  }
  
  //P: will be a string and an array of strings. string might be empty. seems like array will never be empty and both params will be valid
  // R: a boolean representing if all rotations(front and backwards string) are included in arr
  // E: 'lucas' => ['lucas','sacul','ss'] => true