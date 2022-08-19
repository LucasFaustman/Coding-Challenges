
// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string

function shortenToDate(longDate) {
    // split, then slice, then join
    
    return longDate.split(',').slice(0,-1).join(' ')
  }
  
  //P: will be a string. always will be a string
  // R: return a shortened string without the time at the end of the param
  // E: "Friday May 2, 9am") => "Friday May 2"