//Will be an array of strings. no spaces inside of those strings. all lower case letters. no funny business, only valid inputs
//Return an array that removes all consecutive duplicate letters from each string in the array
//E:// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].


function dup(array) {
    //map, then split, filter, then join again
  
    return array.map(string => string.split('').filter((letter,index,str) => letter !== str[index+1]).join(''))
  }
  
  
  
  console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"],['codewars','picaniny','hubububo']))
  console.log(dup(["abracadabra","allottee","assessee"],['abracadabra','alote','asese']))
  console.log(dup(["kelless","keenness"], ['keles','kenes']))