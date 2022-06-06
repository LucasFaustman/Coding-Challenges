// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
    //   I can probably do a simple modulus here
      return base % factor === 0
    }
    
    // P: both integers. base is non negative, factor is positive, meaning they will always be positive and always have nums
    // R: return a boolean of true or false representing if factor is a factor of base
    // E: 10,2 => true 6, 5 => false