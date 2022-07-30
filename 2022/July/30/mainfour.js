// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

// Note:
// In the result codes and their values are in the same order as in M.

function stockList(listOfArt, listOfCat){
  
    if (!listOfArt || !listOfArt.length) {
      return ''
    }
    // declare an object
    let obj = {}
    
    //apply keys to obj with each memeber of categories
    const keys = listOfCat.filter(element => {
      obj[element] = 0
    })
    
  //   then filter through list of art. if element exists, then add the last 3 numbers.
    
  const calcs = listOfArt.filter(element => {
   //if category includes the element[0], then add the value of last 3 digits(number) to property
    if (listOfCat.includes(element[0])) {
  obj[element[0]] += Number(element.slice(-3))
      }
        
    })
  //first do object.entries to get key value pairs. map each pair with : then map each element with brackets around
  return Object.entries(obj).map(element => element.join(' : ')).map(element => `(${element})`).join(' - ')
    }
  
  // P: 2 lists or arrays. one array will be the list of stocks, another a list of categories
  // R: a string with each category summed up from the stocklist
  // E: ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],  ["A", "B", "C", "D"] ->
  //    "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"