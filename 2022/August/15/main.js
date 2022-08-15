// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  
    //I don't think a 10% tip is enough to warrant good service, but oh well...
    
    //I can use a simple conditional here. 5 if statements going through each tip
    //at end, if rating is anything else other than the params stated, return Rating not recognized
    
    //since param is case insensitive, lets just bring it to lowercase and assign to a variable to use in our conditionals
    
    let newRating = rating.toLowerCase()
    
    if (newRating === 'terrible') {
      return 0
    } else if (newRating === 'poor') {
      return Math.ceil(.05 * amount)
    } else if (newRating === 'good') {
      return Math.ceil(.1 * amount)
    } else if (newRating === 'great') {
      return Math.ceil(.15 * amount)
    } else if (newRating === 'excellent') {
      return Math.ceil(.2 * amount)
    } else
      return "Rating not recognised"
  
  }
  
  //P: will be an integer. positive integer. second param will be a string. unsure if either param will always be a value
  // R: return a single integer that represents the tip needed
  // E: 5, 'good' -> 1 because 10% of 5 is 1