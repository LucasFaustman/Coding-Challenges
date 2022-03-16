// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
    //     I need to turn s into an array and filter through the array! I want to return the number of letters outside of a-m.
    // I can do this with the filter method and a conditional
      
      let numOfErrors = s.split('').filter(letter => letter === 'n' || letter == 'o'|| letter === 'p' || letter == 'q'|| letter === 'r' || letter == 's'||
    letter === 't' || letter == 'u'|| letter === 'v' || letter == 'w'|| letter === 'x' || letter == 'y'|| letter === 'z').length
                       
      return `${numOfErrors}/${s.length}`
    }
    
    // P: Parameter will be always a string of letters.
    // R: Return a string that shows the total amount of errors / the total amount of letters. Show errors that are letters outside of a-m
    // E: 'aetlll' => '1/6'