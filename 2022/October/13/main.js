// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:




//A url. this url will be a string. unclear if always will be a string. might contain symbols, numbers, letters.

//Return a string that parses out just the domain name

//E:https://replit.com/@LucasFaustman/101322#index.js => replit
//https://www.linkedin.com/feed/ => linkedin


// function domainName(url) {
//   //i can do a conditional. if url includes www. , get index of that. if not, get index of //

//   //get second index of .com

//   //then I want to slice from first index to second

//   let firstIndex =  url.includes('www.') ? url.indexOf('.') + 1 : url.indexOf('//') + 2

  
//   let secondIndex = url.indexOf('.com')


//   return url.slice(firstIndex, secondIndex)
// }


let domainName = url => url.slice(url.includes('www.') ? url.indexOf('.') + 1 : url.indexOf('//') + 2, url.indexOf('.com'))




console.log(domainName("http://github.com/carbonfive/raygun"), 'github' )
console.log(domainName("http://www.zombie-bites.com"), 'zombie-bites') 
console.log(domainName("https://www.cnet.com"), 'cnet')