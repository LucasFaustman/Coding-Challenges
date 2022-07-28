// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

String.prototype.camelCase=function(){
    //   we can probably do a simple split, map, then join method
    //   when mapping, we want to capitalize charat0, then add element.slice(1).toLowerCase()
      
      return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    }
    
    // P: will be a string. might be empty.
    // R: return a string representing the original string in camelcasing
    // E: 'hello case' => 'HelloCase'