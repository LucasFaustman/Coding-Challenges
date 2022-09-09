// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

function toCsvText(array) {
    //i can join \n
   return array.join('\n')
 }
 
 //P: will be an array. always will be an array and have a length greater than 2
 // R: return a string of the combined array with /n between them
 // E: ([
 //                                 [ 0, 1, 2, 3, 45 ],
 //                                 [ 10,11,12,13,14 ],
 //                                 [ 20,21,22,23,24 ],
 //                                 [ 30,31,32,33,34 ]
 //                                ] ), => '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');