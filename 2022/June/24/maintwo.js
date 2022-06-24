// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    //   
      //   to get the date in a format js can understand, I can use the Date method
    //   if current date is less than or equal to expiration and entered code is equal to correct code
          
       return new Date(currentDate) <= new Date (expirationDate) && enteredCode === correctCode
    
        
    
    }
    // P: several strings, will always be strings
    // Return a boolean representing if the current date is before the expiration date
    // E: '123','123','July 9 2015', 'July 2 2015' => false