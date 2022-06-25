// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){

    //   I first need to check if url even includes #. I can do a simple ternary
    //   if it does, slice it starting at # onwars. if not, just return the url
      return url.includes('#') ? url.slice(0, url.indexOf('#')) : url
    }
    
    // P: Will be a string representing a url. Will always be a string
    // R: Return a string representing the original string but with anything after # removed
    // E: www.codewars.com#about => www.codewars.com