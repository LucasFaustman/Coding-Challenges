// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.



function breakChocolate(n,m) {
    //  I can probably just make a simple return that says n * m - 1. first need to make a conditional though so values aren't 0
      
      return n && m ? n * m - 1 : 0
    }
    
    // P: represents dimensions of chocolate bar. Might be invalid. But will always be a non-negative integer.
    // R: return a number which represents min number of breaks needed
    // E =>  5, 5 => 24