// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

function evaporator(content, evap_per_day, threshold){ 
    //   I first should decalre a variable representing the day count
      let count = 0
    //   I don't think we need the content at all since we are working largely with percentages. we can consider the evaporator
    //   to start at 100%, which I can declare as a variable
      let percentage = 100
      
    //   then create a while loop. while 100 > threshold
    
      
      while (percentage > threshold) {
    // minus percentage * evapperday/100
        percentage -= percentage * evap_per_day/100
        count++
      }
    //   then return count
      
      return count
      
    
    
    }
    
    // P will be three numbers. always will be whole and above 0
    // R: return a single number representing the day on which the evaporator will be out of use
    // E: 10,10,5 => 29