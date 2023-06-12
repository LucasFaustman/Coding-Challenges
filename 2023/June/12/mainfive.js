// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Note: the digits in the resulting string should be sorted.

function unusedDigits(...numbs) {
    //   let str = ''
      
    //   let sortedNums = numbs.sort((a,b) => a-b).join('')
      
      
    //   for (let i = 0; i <= 9;i++) {
    //     if (Number(sortedNums[i] - 1) != i) {
    //       console.log(i)
    //       str += i
    //     }
    //   }
    //   return str
      
      
      //create a string of digits
      let legendOfDigits = ['0','1','2','3','4','5','6','7','8','9']
      let usedDigitsSet = new Set()
      //for loop
        for (let i= 0 ;i < numbs.length; i++) {
          let num = numbs[i].toString().split('')
          for (let j = 0; j < num.length; j++) {
                if (legendOfDigits.includes(num[j])) {
                      usedDigitsSet.add(num[j])
                  }
            }
        }
      return legendOfDigits.filter(digit => !usedDigitsSet.has((digit))).join('')
    }
    
    
    //Will bee an array of numbers. will always be numbers. never invalid or have length less than 1
    //Return a string representing the digits that are not present in the array. res should be sorted
    //[12, 34, 56, 78]  =>  "09"
    