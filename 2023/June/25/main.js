// 860. Lemonade Change

// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

// Constraints:

// 1 <= bills.length <= 105
// bills[i] is either 5, 10, or 20.

/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let fives = 0, tens = 0; // Initialize the count of $5 bills and $10 bills to zero
     for(let bill of bills) {
         if(bill === 5) fives++; // If the customer gives a $5 bill, increment the count of $5 bills
         else if(bill === 10) fives--, tens++; // If the customer gives a $10 bill, decrement the count of $5 bills and increment the count of $10 bills
         else if(tens > 0) fives--, tens--; // If the customer gives a $20 bill and we have at least one $10 bill, decrement the count of both $5 and $10 bills
         else fives -= 3; // If the customer gives a $20 bill and we don't have a $10 bill, decrement the count of $5 bills by 3
         if(fives < 0) return false; // If we have negative count of $5 bills at any point, return false (we don't have enough change)
     }
     return true; // If we can provide change for all customers, return true
 };
 
 //Will be an array of numbers. numbers will be positive ints. bills[i] will either be 5, 10, or 20
 
 //Return a boolean true if we can provide every customer with the correct change, false otherwise.
 
 //Our array represents a queue to buy lemonade from us. Each customer will only buy one lemonade and will pay with either a 5, 10, or 20 bill.
 
 //must provide change for each customer so that the net transaction for each custy is $5
 
 // Example 1:
 
 // Input: bills = [5,5,5,10,20]
 // Output: true
 // Explanation: 
 // From the first 3 customers, we collect three $5 bills in order.
 // From the fourth customer, we collect a $10 bill and give back a $5.
 // From the fifth customer, we give a $10 bill and a $5 bill.
 // Since all customers got correct change, we output true.
 // Example 2:
 
 // Input: bills = [5,5,10,10,20]
 // Output: false
 // Explanation: 
 // From the first two customers in order, we collect two $5 bills.
 // For the next two customers in order, we collect a $10 bill and give back a $5 bill.
 // For the last customer, we can not give the change of $15 back because we only have two $10 bills.
 // Since not every customer received the correct change, the answer is false.