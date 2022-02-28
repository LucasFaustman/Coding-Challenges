// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


function testEven(n) {
    //   I can probably just do a simple return statement with modulus 2
        return n % 2 === 0
    }
    
    // P: Number, might be positive, negative, integer or floats. But will be a number
    // R: Return boolean dependant on if number is even
    // 2 => true -4 => true