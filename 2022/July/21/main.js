// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

function saleHotdogs(n){
    //   I can use a ternary here
      return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : n >= 10 ? 90 * n : 0
    }
      
    //   P: a positive integer. not clear if it will always be
    //   R: a number representing the price in cents
    //   E: 5 , ->475