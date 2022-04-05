// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


function otherAngle(a, b) {

    //   firstly figure out how to get the third angle of a triangle
    //   180 - the other 2 sides
      
      return 180 - a - b
    }