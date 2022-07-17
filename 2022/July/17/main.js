// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

const flip=(d, a)=>{
  
    return d === 'R' ? a.sort((b,c) => b-c) : a.sort((b,c) => c-b)
     
   //   If d === 'R', return a sorted array that is ascending
   //   if d is L, return sorted descending array
   }
   
   // P: will be a string and an array. string represents left or right, array rerepensts the boxes. string wil always be a string
   // and uppercase r or l
   // R: an array representing the gravity of the boxes flipped
   // E: 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]