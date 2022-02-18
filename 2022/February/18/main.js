// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
    //     probably create a year variable
      let years = 0
    //   To make things easier, I should specify total interest and tax down into one variable
    //   let accruedInterest = principal * interest 
    //   let taxedNum = accruedInterest * tax
      
    //   let totalInterestAndTax = accruedInterest - taxedNum
    //   then create a for loop that starts at prinicpial, ends at desired
      for (let i = 0; principal < desired; i++) {
    //     say that prinicpal is equal to a new principal + totalInterest and tax
        principal = principal + ((principal * interest) - (principal * interest * tax))
        years++
      }
      return years
    }
    
    // P can be a integer or it can be float. Will always be an integer or float. D is always greater than P.
    // R A integer that represents the num of years it will take to get to D
    // E 1000,.05,.18,1100 => 3