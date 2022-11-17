// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

function initializeNames(name){
    // I can split then map through the string
    
    return name.split(' ').map((element,index,arr) => index === 0 || index === arr.length-1 ? element : element[0] + '.').join(' ')
  }
  
  //Will be a string. unclear if always a string, or number, or symbol. might be capital letters or not
  //return a new string where the middle name is formatted like M., removing the rest of the middle name for just the first letter plus .
  //'Jack Ryan'                   => 'Jack Ryan'
  // 'Lois Mary Lane'              => 'Lois M. Lane'
  // 'Dimitri'                     => 'Dimitri'